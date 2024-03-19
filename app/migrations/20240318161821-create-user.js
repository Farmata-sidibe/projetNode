'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
          notNull: { msg: "firstName is required" },
        },
      },
   
      lastName: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
          notNull: { msg: "lastname is required" },
        },
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
          notNull: { msg: "email is required" },
          isEmail: {msg:"email is invalid"}
        },
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
          notNull: { msg: "password is required" },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};