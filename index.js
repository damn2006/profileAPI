const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profiles');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', profileRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});


