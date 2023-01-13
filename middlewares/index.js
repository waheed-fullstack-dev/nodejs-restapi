const { validationResult } = require('express-validator');
const db = require('../database/models');

const checkEmail = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(500).json({success: false, error: errors.array()});
        }

        //checking if email already exist
        const emailcheck = await db.User.findOne({
            where: {
                email: req.body.email,
            }
        });

        //if email exist in the database respond with a status of 409
        if (emailcheck) {
            return res.status(409).json({success: false, error: "Email already in use", params: req.body});
        }
        next();
    } catch (error) {
        return res.status(409).json({success: false, error: error.message, meta: error});
    }
}

module.exports = {
    checkEmail
}