import axios from 'axios';
import { NotionModalContent, PopupContent } from './types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getButtonPosition = (id: number) => {
  // Lounge用のボタン位置計算（ID: 1-10）
  if (id >= 1 && id <= 10) {
      // const baseHeight = 87.369; eslint error never used
      const heightIncrement = 18;
      const isLeftSide = id >= 6;
      
      let height;
      if (id <= 5) {
          height = 169 - (heightIncrement * (id - 1));
      } else {
          height = 97 + (heightIncrement * (id - 6));
      }

      return {
          width: isLeftSide ? -9.18 : 9.18,
          height
      };
  }
  
  // Atelier2用のボタン位置計算（ID: 11-14）
  if (id >= 11 && id <= 14) {
      const heights = {
          11: 168.959,
          12: 144.569,
          13: 120.074,
          14: 95.809
      };
      return {
          width: 0,
          height: heights[id as keyof typeof heights] || 0
      };
  }

  // Atelier1用のボタン位置計算（ID: 15-）
  const isLeftSide = id >= 15;
  const baseHeight = 105.358;
  const heightIncrement = 18;
  const heightOffset = Math.floor((id - (isLeftSide ? 17 : 13)) * heightIncrement);
  
  return {
      width: isLeftSide ? -9.18 : 9.18,
      height: baseHeight + heightOffset,
  };
};

export const fetchModalContents = async (): Promise<PopupContent[]> => {
  try{
    const response = await axios.post(`${API_BASE_URL}/api/modal-contents`);
    const data = response.data.data
    console.log(data)
    return data.map((data: NotionModalContent) => {
      const id = data.id;
      const modalTitle = data.modalTitle;
      const name = data.name;
      const modalContent = data.modalContent;
      const grade = data.grade;
      const modalImage = data.modalImage;
      const contentUrl = data.contentUrl;

      if (!id) {
        throw new Error('配置番号が設定されていません');
      }

      const buttonPosition = getButtonPosition(id);
      
      return {
        id,
        modalTitle,
        name,
        modalContent,
        grade,
        modalImage,
        contentUrl,
        buttonPosition,
      };
    });
  } catch (error) {
    console.error('Error fetching modal contents:', error);
    throw error;
  }
};
