const { check } = require('express-validator');

exports.validateSignupBody = [
    check('firstName', 'First Name should be at least 3 characters')
    .trim()
    .isLength({min: 3, max: 30}),
    check('lastName', 'Last Name is requied')
    .trim()
    .isLength({min: 3, max: 30}),
    check('email', 'Please include a valid email')
    .trim()
    .isEmail()
    .normalizeEmail(),
    check('birthDate', 'Please enter a valid date in format YYYY-MM-DD')
    .isDate(),
    check('gender', 'Select your gender')
    .notEmpty(),
    check('contactMethod', 'Please select a contact method')
    .notEmpty(),
    check('city', 'Add your city')
    .notEmpty(),
    check('state', 'Add your state')
    .notEmpty(),
    check('zipCode', 'Enter zip code')
    .trim()
    .notEmpty()
    .isInt()
    .withMessage('Please enter a valid zip code'),
    check('password', 'Password should have at least 6 characters, upper case, lower case and numbers.')
    .trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$/*!@]{6,}$/),
    check('confirmPassword')
    .trim()
    .custom(async (confirmPassword, {req}) => {
      const password = req.body.password
      if(password !== confirmPassword){
        throw new Error('Confirm Password should be same as password')
      }
    })
]


exports.validateUpdateBody = [
  check('firstName', 'First Name should be at least 3 characters')
  .trim()
  .isLength({min: 3, max: 30}),
  check('lastName', 'Last Name is requied')
  .trim()
  .isLength({min: 3, max: 30}),
  check('email', 'Please include a valid email')
  .trim()
  .isEmail()
  .normalizeEmail(),
  check('birthDate', 'Please enter a valid date in format YYYY-MM-DD')
  .isDate(),
  check('gender', 'Select your gender')
  .notEmpty(),
  check('contactMethod', 'Please select a contact method')
  .notEmpty(),
  check('city', 'Add your city')
  .notEmpty(),
  check('state', 'Add your state')
  .notEmpty(),
  check('zipCode', 'Enter zip code')
  .trim()
  .notEmpty()
  .isInt()
  .withMessage('Please enter a valid zip code')
]