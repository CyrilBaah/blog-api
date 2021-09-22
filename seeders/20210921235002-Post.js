const faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let dummyJSON = [];
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        id: faker.datatype.uuid(),
        title: faker.name.title(),
        content: faker.lorem.sentence(),
        userUuid: faker.datatype.uuid(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Posts', dummyJSON, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};