// src/config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB verbunden');
  } catch (err) {
    console.error('❌ MongoDB Fehler:', err);
    process.exit(1); // Beendet den Prozess bei Verbindungsfehler
  }
};

export default connectDB;
