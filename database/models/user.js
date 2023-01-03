'use strict';
const {
  Model, Sequelize
} = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const constants = require('../../constants');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Phone numbers relationship
      User.hasMany(models.Phone, {
        foreignKey: 'userId',
        as: 'phoneNumbers',
        allowNull: true,
      });
      User.hasOne(models.Phone, {
        foreignKey: 'userId',
        as: 'phoneNumber',
        allowNull: true,
      });
    }

    validPassword(password) {
      return bcrypt.compareSync(password, this.hashPassword);
    }
  }
  User.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hashPassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: new Sequelize.ENUM(Object.keys(constants.SEX_TYPES)),
      allowNull: false
    },
    contactMethod: {
      type: new Sequelize.ENUM(Object.keys(constants.PREFERRED_CONTACT_METHODS)),
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activationKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
    resetPasswordKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jwtToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    hooks: {
      beforeCreate: async (user, options) => {
        if (user.password) {
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(user.password, salt);
          user.hashPassword = hash;
          user.salt = salt;
        }
      },
      afterUpdate: (user, options) => {
        if(user.password){
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(user.password, salt);
          user.hashPassword = hash;
          user.salt = salt;
        }
      }
    },
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email']
      }
    ],
    sequelize,
    modelName: 'User',
    tableNames: 'Users'
  });
  return User;
};