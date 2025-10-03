const express = require('express');
const { generateProfiles } = require('../controllers/profileController');

const router = express.Router();

router.post('/api/profiles', generateProfiles);

module.exports = router;


