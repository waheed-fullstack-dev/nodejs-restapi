'use strict';
/** @type {import('sequelize-cli').Migration} */
const constants = require('../../constants');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validates: {
          notEmpty: true
        }
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      birthDate: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isDate: true,
          notEmpty: true
        }
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: true
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hashPassword: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zipCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: new Sequelize.ENUM(Object.keys(constants.SEX_TYPES)),
        allowNull: false
      },
      contactMethod: {
        type: new Sequelize.ENUM(Object.keys(constants.PREFERRED_CONTACT_METHODS)),
        allowNull: false,
      },
      activationKey: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      resetPasswordKey: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        default: true,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};