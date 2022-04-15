'use strict';
/**
 * Prioridad menor, primero las otras
 */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('countries', [{
                name: 'República Islámica de Afganistán',
                shortName: 'Afganistán',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Albania',
                shortName: 'Albania',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República Federal de Alemania',
                shortName: 'Alemania',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Principado de Andorra',
                shortName: 'Andorra',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Angola',
                shortName: 'Angola',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Antigua y Barbuda',
                shortName: 'Antigua y Barbuda',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Reino de Arabia Saudita',
                shortName: 'Arabia Saudita',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República Argelina Democrática y Popular',
                shortName: 'Argelia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República Argentina',
                shortName: 'Argentina',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Armenia',
                shortName: 'Armenia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mancomunidad de Australia	',
                shortName: 'Australia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Austria',
                shortName: 'Austria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Azerbaiyán',
                shortName: 'Azerbaiyán',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mancomunidad de las Bahamas',
                shortName: 'Bahamas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República Popular de Bangladés',
                shortName: 'Bangladés',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Barbados',
                shortName: 'Barbados',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Reino de Baréin',
                shortName: 'Baréin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Reino de Bélgica',
                shortName: 'Bélgica',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Belice',
                shortName: 'Belice',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Benín',
                shortName: 'Benín',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Bielorrusia',
                shortName: 'Bielorrusia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de la Unión de Myanmar',
                shortName: 'Myanmar',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Estado Plurinacional de Bolivia',
                shortName: 'Bolivia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bosnia y Herzegovina',
                shortName: 'Bosnia y Herzegovina',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Botsuana',
                shortName: 'Botsuana',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República Federativa del Brasil',
                shortName: 'Brasil',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Estado de Brunéi Darussalam',
                shortName: 'Brunéi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Bulgaria',
                shortName: 'Bulgaria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Burkina Faso',
                shortName: 'Burkina Faso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Burundi',
                shortName: 'Burundi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Reino de Bután',
                shortName: 'Bután',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Cabo Verde',
                shortName: 'Cabo Verde',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Reino de Camboya',
                shortName: 'Camboya',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'República de Camerún',
                shortName: 'Camerún',
                createdAt: new Date(),
                updatedAt: new Date()
            },


        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Countries', null, {});
    }
};