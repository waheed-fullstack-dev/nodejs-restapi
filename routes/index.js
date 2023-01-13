const { Router } = require('express');
const authController = require('../controllers/v1/auth');
const userController = require('../controllers/v1/user');
const { checkEmail} = require('../middlewares');
const { validateSignupBody, validateUpdateBody } = require('../validations');
const router = Router();

router.post('/auth/signup', validateSignupBody, checkEmail, authController.createNewUser);
router.post('/auth/signin', authController.loginUser);
router.get('/users', userController.getAllUser);
router.get('/users/:userId', userController.getUserById);
router.delete('/users/:userId', userController.deleteUser);
router.put('/users/:userId/edit', validateUpdateBody, userController.updateUser);
module.exports = router;
