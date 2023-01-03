const express = require('express');
const authController = require('../controllers/v1/auth');
const userController = require('../controllers/v1/user');
const router = express.Router();

router.post('/auth/signup', authController.createNewUser);
router.get('/users', userController.getAllUser);

module.exports = router;
