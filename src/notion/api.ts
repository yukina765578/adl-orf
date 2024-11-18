import { NotionModalContent, PopupContent } from './types';

const getButtonPosition = (id: number) => {
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
  try {
    const response = await fetch(
      `/notion/databases/${process.env.REACT_APP_NOTION_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sorts: [
            {
              property: 'title',
              direction: 'ascending'
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Notion API Response:', data); // レスポンスデータの確認

    // データの構造を安全に処理
    return data.results.map((result: any) => {
      console.log('Processing result:', result); // 各結果オブジェクトの確認

      // プロパティの存在確認と安全な取得
      const title = result.properties?.title?.title?.[0]?.plain_text;
      const name = result.properties?.name?.rich_text?.[0]?.plain_text;
      const content = result.properties?.modalContent?.rich_text?.[0]?.plain_text;

      if (!title) {
        console.error('Missing title for result:', result);
        throw new Error('Missing required title property');
      }

      const id = parseInt(title);

      return {
        id,
        modalTitle: title,
        name: name || 'Default Name',
        modalContent: content || 'Default Content',
        buttonPosition: getButtonPosition(id),
      };
    });
  } catch (error) {
    console.error('Error fetching Notion data:', {
      error,
      databaseId: process.env.REACT_APP_NOTION_DATABASE_ID,
      fullError: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
};