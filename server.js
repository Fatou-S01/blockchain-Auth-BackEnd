const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const certificateRoutes = require('./routes/certificateRoutes'); // Nouveau
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Configurer CORS
app.use(cors({
  origin: 'http://localhost:4200', // Autoriser uniquement votre front-end Angular
}));

// Routes d'authentification
app.use('/api/auth', authRoutes);
app.use('/api/certificates', certificateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
