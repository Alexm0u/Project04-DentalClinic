'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const services = []
    services.push({
      id: 1,
        servicename: 'Cleaning',
        description: 'A nice cleaning for your teeth',
        price: 60,
        duration: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      services.push({
        id: 2,
        servicename: 'Broken Teeth',
        description: 'We glue the teeth if you have the broken pieces',
        price: 5,
        duration: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      return queryInterface.bulkInsert('Services', services)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
