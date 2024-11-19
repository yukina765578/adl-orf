// Note: 使ってるか不明なので変更してないです
import { PopupContent } from './types';

export const NOTION_IMAGE_EXPIRY_TIME = 3600; // 1時間

export const updateExpiredImageUrl = async (popupContent: PopupContent) => {
  if (!popupContent.modalImage.includes('secure.notion-static.com')) {
    return popupContent.modalImage;
  }

  try {
    const response = await fetch(
      `/notion/pages/${popupContent.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch updated image URL');
    }

    const data = await response.json();
    const imageFile = data.properties?.modalImage?.files?.[0];
    return imageFile?.file?.url || imageFile?.external?.url || popupContent.modalImage;
  } catch (error) {
    console.error('Error updating image URL:', error);
    return popupContent.modalImage;
  }
};
