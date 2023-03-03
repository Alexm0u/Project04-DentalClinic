'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarios = []
    usuarios.push({
        id: 1,
        specialty: 'Orthodontics',
        createdAt: new Date(),
        updatedAt: new Date()
      })
      usuarios.push({
        id: 2,
        specialty: 'Oral Surgery',
        createdAt: new Date(),
        updatedAt: new Date()
      })
      return queryInterface.bulkInsert('Doctors', usuarios)
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
