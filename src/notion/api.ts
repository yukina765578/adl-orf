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

const validateEnvironmentVars = () => {
  const apiKey = process.env.REACT_APP_NOTION_API_KEY;
  const databaseId = process.env.REACT_APP_NOTION_DATABASE_ID;

  console.log('Environment Variables Check:', {
    hasApiKey: !!apiKey,
    hasDatabaseId: !!databaseId,
    apiKeyLength: apiKey?.length,
    databaseIdLength: databaseId?.length
  });

  if (!apiKey) {
    throw new Error('REACT_APP_NOTION_API_KEY is not set');
  }
  if (!databaseId) {
    throw new Error('REACT_APP_NOTION_DATABASE_ID is not set');
  }

  return { apiKey, databaseId };
};

export const fetchModalContents = async (): Promise<PopupContent[]> => {
  try {
    const { apiKey, databaseId } = validateEnvironmentVars();

    const requestUrl = `/api/notion/databases/${databaseId}/query`;
    console.log('Requesting:', requestUrl);

    const response = await fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
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
    });

    const responseText = await response.text();
    console.log('Raw Response:', responseText);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
    }

    const data = JSON.parse(responseText);
    console.log('Parsed Response:', data);

    if (!Array.isArray(data.results)) {
      throw new Error('Unexpected response format: results is not an array');
    }

    return data.results.map((result: NotionModalContent) => {
      const title = result.properties?.title?.title?.[0]?.plain_text;
      const name = result.properties?.name?.rich_text?.[0]?.plain_text;
      const content = result.properties?.modalContent?.rich_text?.[0]?.plain_text;
      
      const imageFile = result.properties?.modalImage?.files?.[0];
      const imageUrl = imageFile?.file?.url || imageFile?.external?.url || '';

      if (!title) {
        throw new Error(`Missing required title property in result: ${JSON.stringify(result)}`);
      }

      const id = parseInt(title);

      return {
        id,
        modalTitle: title,
        name: name || 'Default Name',
        modalContent: content || 'Default Content',
        modalImage: imageUrl,
        buttonPosition: getButtonPosition(id),
      };
    });
  } catch (error) {
    console.error('Error fetching Notion data:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
};