const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/notion',
    createProxyMiddleware({
      target: 'https://api.notion.com/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/notion': '',
      },
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      // リクエストのデバッグ
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxy Request:', {
          path: proxyReq.path,
          method: proxyReq.method,
          headers: proxyReq.getHeaders()
        });
      },
      // レスポンスのデバッグ
      onProxyRes: (proxyRes, req, res) => {
        const originalSend = res.send;
        res.send = function(data) {
          console.log('Proxy Response:', {
            statusCode: proxyRes.statusCode,
            headers: proxyRes.headers,
            data: data.toString()
          });
          return originalSend.call(this, data);
        };
      },
      // エラーハンドリング
      onError: (err, req, res) => {
        console.error('Proxy Error:', err);
        res.status(500).json({ 
          error: 'Proxy Error', 
          message: err.message,
          stack: err.stack
        });
      }
    })
  );
};