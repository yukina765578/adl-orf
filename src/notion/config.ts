export const NOTION_API_BASE_URL = 'https://api.notion.com/v1';
export const NOTION_API_VERSION = '2022-06-28';

export const validateEnvironmentVars = (): { apiKey: string; databaseId: string } => {
  const apiKey = process.env.REACT_APP_NOTION_API_KEY;
  const databaseId = process.env.REACT_APP_NOTION_DATABASE_ID;

  if (!apiKey) {
    throw new Error('REACT_APP_NOTION_API_KEY is not set');
  }
  if (!databaseId) {
    throw new Error('REACT_APP_NOTION_DATABASE_ID is not set');
  }

  return { apiKey, databaseId };
};

