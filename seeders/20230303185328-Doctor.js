"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const doctors = [];
        doctors.push({
        id: 1,
        user_id: 2,
        specialty: "Orthodontics",
        createdAt: new Date(),
        updatedAt: new Date(),
        });
        doctors.push({
        id: 2,
        user_id: 4,
        specialty: "Oral Surgery",
        createdAt: new Date(),
        updatedAt: new Date(),
        });
        return queryInterface.bulkInsert("Doctors", doctors);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
