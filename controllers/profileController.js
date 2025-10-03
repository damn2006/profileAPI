const { createProfiles } = require('../services/profileService');
const { validateProfile } = require('../utils/validators');

const generateProfiles = (req, res) => {
    const { count = 1, gender, country } = req.body;

    const errors = validateProfile(count, gender, country);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const profiles = createProfiles(count, gender, country);
    res.json(profiles);
};

module.exports = { generateProfiles };


