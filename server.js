// Week 8: Express.js application and routing for the Stock Market Analysis Platform.
const express = require('express');
const stockRoutes = require('./routes/stocks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Week 7 health-check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Stock Market Analysis Platform API is alive',
    version: '1.0',
    status: 'ok'
  });
});
app.get('/api/health', (req, res) => {
  res.json({ message: 'Stock Market Analysis Platform API is alive', version: '1.0', status: 'ok' });
});

// Week 8 Express routes
app.use('/api/stocks', stockRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Stock Market Express API running at http://localhost:${PORT}`);
});

module.exports = app;
