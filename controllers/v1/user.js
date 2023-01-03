require('dotenv').config();
const db =  require('../../database/models');


const getAllUser = async(req, res, next) => {
    try {
        const users = await db.User.findAll();
        return res.status(200).json({ users: users });
    } catch (err) {
        console.log('Error: ' + err);
        return next(err);
    } 
}

module.exports = {
    getAllUser
}
