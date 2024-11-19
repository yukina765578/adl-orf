const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  const apiKey = process.env.REACT_APP_NOTION_API_KEY;
  
  if (!apiKey) {
    console.error('WARNING: REACT_APP_NOTION_API_KEY is not set in proxy');
  }

  app.use(
    '/api/notion',
    createProxyMiddleware({
      target: 'https://api.notion.com/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api/notion': '',
      },
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxy Request:', {
          path: proxyReq.path,
          headers: proxyReq.getHeaders()
        });
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy Response:', {
          statusCode: proxyRes.statusCode,
          headers: proxyRes.headers
        });
      },
      onError: (err, req, res) => {
        console.error('Proxy Error:', err);
      }
    })
  );
};