// src/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Datenbankverbindung herstellen
connectDB();

// Hier können weitere Middleware und Routen hinzugefügt werden

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf Port ${PORT}`);
});
