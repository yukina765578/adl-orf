import axios from 'axios';
import { NOTION_API_BASE_URL, NOTION_API_VERSION, validateEnvironmentVars } from './config';

const { apiKey } = validateEnvironmentVars();

export const notionApi = axios.create({
  baseURL: NOTION_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Notion-Version': NOTION_API_VERSION,
    'Content-Type': 'application/json',
  }
});
