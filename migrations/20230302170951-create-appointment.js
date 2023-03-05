'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Services",
          key:"id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key:"id"
        }
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctors",
          key:"id"
        }
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctors",
          key:"id"
        }
      },
      payment: {
        type: Sequelize.BOOLEAN
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};