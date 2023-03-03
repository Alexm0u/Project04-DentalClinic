'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const appointment = []
    appointment.push({
      id: 1,
      service_id: 1,
      user_id: 2,
      doctor_id: 2,
      payment: true,
      comment: "Dark teeth",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      appointment.push({
        id: 2,
        service_id: 2,
        user_id: 1,
        doctor_id: 1,
        payment: false,
        comment: "allergic to aptx4869",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      return queryInterface.bulkInsert('Appointments', appointment)
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
