export const notionClient = {
  baseUrl: '/notion',  // プロキシ用のベースURL
  databaseId: process.env.REACT_APP_NOTION_DATABASE_ID ?? '',
};