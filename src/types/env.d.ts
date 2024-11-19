declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_NOTION_API_KEY: string;
      REACT_APP_NOTION_DATABASE_ID: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }