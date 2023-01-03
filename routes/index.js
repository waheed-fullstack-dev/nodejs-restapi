const express = require('express');
const authController = require('../controllers/v1/auth');

const router = express.Router();

router.post('/auth/signup', authController.createNewUser);

module.exports = router;
