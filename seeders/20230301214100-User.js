'use strict';
const bcrypt = require("bcrypt");
// var password = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const encryptedPassword = bcrypt.hashSync(password, 10);
    const usuarios = [];
    // const password = bcrypt.hashSync(password, 10);
  usuarios.push({
      // id: 1,
      dni_nif: '76548962R',
      fullName: 'Doe el grande',
      phone: 666666661,
      email: 'doegrande@gmail.com',
      password: 'doeelgrande',
      payment: 'Efectivo',
      comments: 'Un grande el señor doe',
      // role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    usuarios.push({
      // id: 2,
      dni_nif: '12345678P',
      fullName: 'Doe el chico',
      phone: 999999991,
      email: 'doechico@gmail.com',
      password: 'doeelchico',
      payment: 'Tarjeta',
      comments: 'Un chico el señor doe',
      // role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    usuarios.push({
      // id: 3,
      dni_nif: '45652276L',
      fullName: 'Doe el del medio',
      phone: 444333222,
      email: 'doemedio@gmail.com',
      password: 'doeelmedio',
      payment: 'Bitcoin',
      comments: 'Un medio el señor doe',
      // role_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return queryInterface.bulkInsert('Users', usuarios)
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
