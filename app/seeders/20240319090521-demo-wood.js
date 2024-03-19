'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Woods', [{
    name: 'Soft',
    type: 'softwood',
    hardness: "hard",

    }], {});
  },
  
  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Woods', null, {});

  }
  };
