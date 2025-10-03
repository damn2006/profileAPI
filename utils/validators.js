const validateProfile = (count, gender, country) => {
    const errors = [];

    if (!count || typeof count !== 'number' || count < 1) {
        errors.push('Le champ "count" doit être un nombre supérieur à 0.');
    } else if (count > 100) {
        errors.push('Le nombre de profils demandé ne peut pas dépasser 100.');
    }

    if (gender && !['male', 'female'].includes(gender.toLowerCase())) {
        errors.push('Le champ "gender" doit être "male" ou "female".');
    }

    if (country && typeof country !== 'string') {
        errors.push('Le champ "country" doit être une chaîne de caractères.');
    }

    return errors;
};

module.exports = { validateProfile };
