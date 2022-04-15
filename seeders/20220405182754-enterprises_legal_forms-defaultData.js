'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('enterprises_legal_forms', [{
                name: 'Autónomo',
                description: 'Empresario individual o trabajador por cuenta propia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Comunidad de bienes.',
                description: 'Sociedad sin personalidad jurídica propia formada por autónomos que comparten una misma actividad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cooperativa',
                description: 'Asociación autónoma de personas unidas voluntariamente con el objetivo de desarrollar un negocio o actividad económica usando una compañía para ello',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sociedad Anónima.',
                description: 'Sociedad cuyo capital, dividido en acciones negociables, está formado por la aportación de los accionistas que responden únicamente por el monto de sus acciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sociedad Civil.',
                description: 'Sociedad formada por trabajadores autónomos para realizar una misma actividad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sociedad Limitada',
                description: 'Sociedad mercantil en la que la responsabilidad de cada uno de sus socios está delimitada por el capital que estos hayan aportado a la misma',
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },




    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Enterprises_legal_forms', null, {});
    }
};