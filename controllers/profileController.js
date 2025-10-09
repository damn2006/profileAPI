const { createProfiles } = require('../services/profileService');
const { validateProfile } = require('../utils/validators');

const generateProfiles = (req, res) => {
    // Récupérer les paramètres selon GET (query) ou POST (body)
    let { count = 1, gender, country } = req.method === 'GET' ? req.query : req.body;

    // Conversion en nombre entier
    count = parseInt(count, 10);

    // Si count invalide ou <= 0, mettre 1
    if (isNaN(count) || count <= 0) count = 1;

    console.log("Paramètres reçus -> count:", count, "gender:", gender, "country:", country);

    // Validation (à adapter selon ta fonction validateProfile)
    const errors = validateProfile(count, gender, country);
    if (errors.length > 0) {
        console.log("Erreurs de validation:", errors);
        return res.status(400).json({ errors });
    }

    // Génération des profils
    const profiles = createProfiles(count, gender, country);

    res.json({
        success: true,
        count,
        data: profiles
    });
};

module.exports = { generateProfiles };






