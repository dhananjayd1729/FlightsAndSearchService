"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Cities",
            [
                {
                    name: "New Delhi",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Mohali",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Amritsar",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Hyderabad",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Dehradun",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Manali",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
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
