import { notionClient } from './client';
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
      `${notionClient.baseUrl}/databases/${notionClient.databaseId}/query`,
      {
        method: 'POST',
        headers: notionClient.headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Notion');
    }

    const data = await response.json();
    
    return data.results.map((result: NotionModalContent) => ({
      id: parseInt(result.properties.title.title[0].plain_text),
      modalTitle: result.properties.title.title[0].plain_text,
      name: result.properties.name.rich_text[0].plain_text,
      modalContent: result.properties.modalContent.rich_text[0].plain_text,
      buttonPosition: getButtonPosition(parseInt(result.properties.title.title[0].plain_text)),
    }));
  } catch (error) {
    console.error('Error fetching Notion data:', error);
    throw error;
  }
};