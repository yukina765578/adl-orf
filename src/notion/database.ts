import { notionApi } from './api';
import { validateEnvironmentVars } from './config';
import { NotionDatabaseResponse, NotionModalContent, PopupContent, Grade } from './types';

const getButtonPosition = (id: number) => {
  // Lounge用のボタン位置計算（ID: 1-12）
  if (id >= 1 && id <= 12) {
      // const baseHeight = 87.369; eslint error never used
      const heightIncrement = 18;
      const isLeftSide = id >= 7;
      
      let height;
      if (id <= 6) {
          height = 177.469 - (heightIncrement * (id - 1));
      } else {
          height = 87.369 + (heightIncrement * (id - 7));
      }

      return {
          width: isLeftSide ? -9.18 : 9.18,
          height
      };
  }
  
  // Atelier2用のボタン位置計算（ID: 21-24）
  if (id >= 21 && id <= 24) {
      const heights = {
          21: 168.959,
          22: 144.569,
          23: 120.074,
          24: 95.809
      };
      return {
          width: 0,
          height: heights[id as keyof typeof heights] || 0
      };
  }

  // Atelier1用のボタン位置計算（ID: 13-20）
  const isLeftSide = id >= 17;
  const baseHeight = 105.358;
  const heightIncrement = 18;
  const heightOffset = Math.floor((id - (isLeftSide ? 17 : 13)) * heightIncrement);
  
  return {
      width: isLeftSide ? -9.18 : 9.18,
      height: baseHeight + heightOffset,
  };
};

export const fetchModalContents = async (): Promise<PopupContent[]> => {
  const { databaseId } = validateEnvironmentVars();
  try {
    const response = await notionApi.post<NotionDatabaseResponse>(
      `/databases/${databaseId}/query`,
      {
        sorts: [
          {
            property: '配置番号',
            direction: 'ascending'
          }
        ]
      }
    );

    const data = response.data.results;
    console.log('Notion API Response:', data);

    return data.map((result: NotionModalContent) => {
      const id = result.properties?.配置番号?.number;
      const title = result.properties?.展示名?.title?.[0]?.plain_text;
      const name = result.properties?.展示者?.rich_text?.[0]?.plain_text;
      const content = result.properties?.展示概要?.rich_text?.[0]?.plain_text;
      const grade = result.properties?.学年?.select?.name;
      const contentUrl = result.properties?.展示内容リンク?.url;
      
      const imageFile = result.properties?.展示表紙?.files?.[0];
      const imageUrl = imageFile?.file?.url || imageFile?.external?.url || '';

      if (!id) {
        throw new Error('配置番号が設定されていません');
      }

      const validGrade = (grade?: string): grade is Grade => {
        const validGrades: Grade[] = ['B1', 'B2', 'B3', 'B4', 'M1', 'M2'];
        return !!grade && validGrades.includes(grade as Grade);
      };

      if (!validGrade(grade)) {
        console.warn(`ID ${id} の学年が無効です: ${grade}`);
      }

      return {
        id,
        modalTitle: title || 'タイトルなし',
        name: name || '名前なし',
        modalContent: content || '内容なし',
        grade: validGrade(grade) ? grade : 'B1',
        modalImage: imageUrl,
        contentUrl,
        buttonPosition: getButtonPosition(id),
      };
    });
  } catch (error) {
    console.error('Error fetching Notion data:', {
      error,
      databaseId: process.env.REACT_APP_NOTION_DATABASE_ID,
    });
    throw error;
  }
};
