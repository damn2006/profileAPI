const express = require('express');
const { generateProfiles } = require('../controllers/profileController');

const router = express.Router();


router.get('/generate', generateProfiles);


module.exports = router;


