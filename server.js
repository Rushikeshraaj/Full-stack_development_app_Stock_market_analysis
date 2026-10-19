// Weeks 7-9: Node.js, Express routing, and optional MongoDB/Mongoose connection.
require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/database');
const stockRoutes = require('./routes/stocks');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Stock Market Analysis Platform API is alive', version: '1.0', status: 'ok' });
});
app.get('/api/health', (req, res) => {
  res.json({ message: 'Stock Market Analysis Platform API is alive', version: '1.0', status: 'ok' });
});
app.use('/api/stocks', stockRoutes);
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => console.log(`Stock Market Express API running at http://localhost:${PORT}`));
}

if (require.main === module) {
  startServer().catch(error => {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  });
}

module.exports = app;
