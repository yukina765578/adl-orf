export const notionClient = {
  baseUrl: '/notion',
  databaseId: process.env.REACT_APP_NOTION_DATABASE_ID ?? '',
  headers: {
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  }
};
