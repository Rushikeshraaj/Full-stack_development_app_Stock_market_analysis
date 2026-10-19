// Week 7: Basic Node.js HTTP server for the Stock Market Analysis Platform.
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET' && (req.url === '/' || req.url === '/api/health')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Stock Market Analysis Platform API is alive',
      version: '1.0',
      status: 'ok'
    }));
    return;
  }

  if (req.method === 'GET' && req.url === '/api/stocks') {
    res.writeHead(200);
    res.end(JSON.stringify([
      { symbol: 'RELIANCE', price: 2850.5, change: 1.25, volume: '2.4M' },
      { symbol: 'TCS', price: 3920.75, change: -0.45, volume: '1.1M' },
      { symbol: 'INFY', price: 1680.2, change: 0.85, volume: '3.2M' }
    ]));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ message: 'Route not found' }));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Stock Market API running at http://localhost:${PORT}`);
});
