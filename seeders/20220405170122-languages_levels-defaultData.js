'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('language_levels', [{
                name: 'Muy bajo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bajo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Medio',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Alto',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Nativo',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Language_levels', null, {});
    }
};