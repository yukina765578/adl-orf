import { getRequiredEnvVar } from '../utils/env';

export const notionClient = {
  baseUrl: '/api/notion',
  databaseId: getRequiredEnvVar('REACT_APP_NOTION_DATABASE_ID'),
  headers: {
    'Authorization': `Bearer ${getRequiredEnvVar('REACT_APP_NOTION_API_KEY')}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  }
};