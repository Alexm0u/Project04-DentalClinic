'use strict';
const bcrypt = require("bcrypt");
// var password = bcrypt.hashSync(password, 10);

const password1 = "123";
const password2 = "321";
const password3 = "123456";
const password4 = bcrypt.hashSync(password1, 10);
const password5 = bcrypt.hashSync(password2, 10);
const password6 = bcrypt.hashSync(password3, 10);


/** @type {import('sequelize-cbcrypt.hashSync(password, 10);li').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const encryptedPassword = bcrypt.hashSync(password, 10);
    const usuarios = [];
    // const password = bcrypt.hashSync(password, 10);

  usuarios.push({
      id: 1,
      dni_nif: '76548962R',
      fullName: 'Doe el grande',
      phone: 666666661,
      email: 'doegrande@gmail.com',
      password: password4,
      payment: 'Efectivo',
      comments: 'Un grande el señor doe',
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    usuarios.push({
      id: 2,
      dni_nif: '12345678P',
      fullName: 'Doe el chico',
      phone: 999999991,
      email: 'doechico@gmail.com',
      password: password5,
      payment: 'Tarjeta',
      comments: 'Un chico el señor doe',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    usuarios.push({
      id: 3,
      dni_nif: '45652276L',
      fullName: 'Doe el del medio',
      phone: 444333222,
      email: 'doemedio@gmail.com',
      password: password6,
      payment: 'Bitcoin',
      comments: 'Un medio el señor doe',
      role_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    usuarios.push({
      id: 4,
      dni_nif: '56887416Q',
      fullName: 'Adam de Eternia',
      phone: 658746125,
      email: 'adameternia@gmail.com',
      password: password6,
      payment: 'Alfajores',
      comments: 'Nadie sabe que en realidad es HeMan',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    usuarios.push({
      id: 5,
      dni_nif: '84569741T',
      fullName: 'Optimus Prime',
      phone: 654894120,
      email: 'imarobot@gmail.com',
      password: password6,
      payment: 'Paypal',
      comments: 'Se pone como una moto',
      role_id: 1,
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