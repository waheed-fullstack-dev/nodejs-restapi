require('dotenv').config();
const db =  require('../../database/models');
const getAllUser = async(req, res, next) => {
    try {
        console.log("CreateUser")
        const user = await db.User.create(req.body);
        const token = await jwt.sign({id: user.id, email: user.email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h'})
        user.jwtToken = token;
        await user.save();
        return res.status(200).json({ user: user, token: token});
    } catch (err) {
        console.log('Error: ' + err);
        return next(err);
    } 
}

module.exports = {
    createNewUser
}
