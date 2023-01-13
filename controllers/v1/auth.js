require('dotenv').config();
const jwt = require('jsonwebtoken');
const db =  require('../../database/models');
const createNewUser = async (req, res, next) => {
    try {
        const user = await db.sequelize.transaction(async (t) => {
            const user = await db.User.create(req.body, { transaction: t });
            const userAddress = req.body.address;
            const phone = req.body.phone;
            if(phone){
                await db.Phone.create({userId: user.id, number: phone}, { transaction: t });
            }
            if(userAddress){
                await db.Address.create({userId: user.id, address: userAddress}, { transaction: t });
            }

            return user;
        });

        const token = await jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '24h'})
        user.jwtToken = token;
        await user.save();
        return res.status(200).json({ success: true, user: user, token: token});
    } catch (err) {
        return next(err);
    } 
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({success: false,  error: 'User not found' });
        } 
        if (!user.validatePassword(password)) {
            return res.status(400).json({success: false, error: 'Email or password incorrect' });
        }
        const token = await jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '24h'})
        user.jwtToken = token;
        await user.save();
        return res.status(200).json({ success: true, user: user, token: token});
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    createNewUser,
    loginUser
}