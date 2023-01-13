require('dotenv').config();
const db =  require('../../database/models');


const getAllUser = async(req, res, next) => {
    try {
        const users = await db.User.findAll({ include: [{model: db.Phone, as: 'phone'}, {model: db.Address, as: 'userAddress'}] });
        return res.status(200).json({ users: users });
    } catch (err) {
        console.log('Error: ' + err);
        return next(err);
    } 
}

const getUserById = async(req, res, next) => {
    try {
        const user = await db.User.findOne({where: {id: req.params.userId}, include: [{model: db.Phone, as: 'phone'}, {model: db.Address, as: 'userAddress'}]});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user: user });
    } catch (err) {
        return next(err);
    } 
}

const updateUser = async(req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await db.User.findOne({where: {id: userId}, include: [{model: db.Phone, as: 'phone'}, {model: db.Address, as: 'userAddress'}]});
        if (!user) {
            return res.status(404).json({success: false, message: 'User not found' });
        }
        
        const [updated] = await db.User.update(req.body, {
            where: { id: userId }, individualHooks: true
          });
          if (updated) {
            const updatedUser = await db.User.findOne({ where: { id: userId }, include: [{model: db.Phone, as: 'phone'}, {model: db.Address, as: 'userAddress'}]});
            return res.status(200).json({ success: true, user: updatedUser });
          }
        return res.status(500).json({success: false, error: `User not found for userId ${userId}` });
    } catch (err) {
        return next(err);
    } 
}

const deleteUser = async(req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await db.User.findOne({where: {id: userId}});
        if (!user) {
            return res.status(404).json({success: false, message: 'User not found' });
        }
        await db.User.destroy({where: {id: userId}});
        return res.status(200).json({success: true, message: 'User deleted' });
    }catch(error) {
        return next(error);
    }
}

module.exports = {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}
