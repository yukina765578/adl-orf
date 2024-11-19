import fetch from 'node-fetch';
import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const { path, httpMethod, body } = event;

  const notionApiUrl = `https://api.notion.com/v1${path.replace('/api/notion', '')}`;
  const headers = {
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(notionApiUrl, {
      method: httpMethod,
      headers,
      body: httpMethod === 'POST' && body ? body.toString() : undefined,
    });

    const data = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};

export { handler };
