import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Standardroute
app.get('/', (req, res) => {
  res.send('🎲 Würfel-API läuft!');
});

export default app;
