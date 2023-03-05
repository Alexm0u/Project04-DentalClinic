'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = []
    roles.push({
      id: 1,
      name: 'Usuario',
      description: 'Tio de a pie',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    roles.push({
      id: 2,
      name: 'Staff',
      description: 'Los que no mandan',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    roles.push({
      id: 3,
      name: 'Administrador',
      description: 'El que manda',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return queryInterface.bulkInsert('Roles', roles)
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