import express from 'express';
import userRoutes from './routes/userRoutes.js';


const app = express();

// Middleware
app.use(express.json());

// Standardroute
app.get('/', (req, res) => {
  res.send('🎲 Würfel-API läuft!');
});

// Routen
app.use('/api', userRoutes);


export default app;
