'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Woods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values: ["softwood", "exotic wood", "noble and hardwoods"],
        defaultValue: "softwood"
      },
      hardness: {
        type: Sequelize.ENUM,
        values: ['tender', 'medium-hard', 'hard'],
        defaultValue: "hard"
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('Woods');
  }
};