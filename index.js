const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profiles');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', profileRoutes);

//health check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'API is running smoothly 🚀',
        uptime: process.uptime(),  // Temps depuis le démarrage en secondes
        timestamp: new Date().toISOString(),
        version: '1.0.0'  // tu peux mettre la version de ton API ici
    });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});


