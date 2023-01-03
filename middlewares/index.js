const { check, validationResult } = require('express-validator');

const validateSignupBody = [
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
    check('password','Password should have at least 6 characters, upper case, lower case and numbers.')
    .trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$/*!@]{6,}$/),
    check('confirmPassword')
    .trim()
    .custom(async (confirmPassword, {req}) => {
      const password = req.body.password
      if(password !== confirmPassword){
        throw new Error('Confirm Password should be same as password')
      }
    }),
    check('birthDate', 'Please enter a valid date in format YYYY-MM-DD')
    .isDate(),
    check('sex', 'Select your gender'),
    check('contactMethod', 'Please select a contact method'),
    check('avatar', 'Add profile image')
    .trim()
    .notEmpty(),
    check('city', 'Add your city')
    .trim()
    .notEmpty(),
    check('state', 'Add you state')
    .trim()
    .notEmpty(),
    check('zipCode', 'Enter zip code')
    .trim()
    .notEmpty() 
    .isInt
]

const checkEmail = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(500).json({ error: errors.array()});
        }
        //checking if email already exist
        const emailcheck = User.findOne({
            where: {
            email: req.body.email,
            },
        });

        //if email exist in the database respond with a status of 409
        if (emailcheck) {
            return res.status(409).json({error: "Email already in use", params: req.body});
        }
        next();
    } catch (error) {
        console.log(error)
        return res.status(409).json({error: error.message, meta: error});
    }
}

module.exports = {
    validateSignupBody,
    checkEmail
}