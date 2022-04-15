'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('modalities', [{
                name: 'A término fijo',
                description: 'Se pacta una duración determinada del trabajo, teniendo reglas especificas para una posible renovación',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'A término indefinido',
                description: 'No se establece una fecha de finalización en concreto, quedando su duración indefinida en el tiempo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Transitorio u ocasional',
                description: 'Trabajos temporales como el reemplazo momentáneo de un empleado o la realización de una única actividad definida',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Por la duración del proyecto o labor',
                description: 'Se establece el trabajo a realizar y la duración del mismo sera por el tiempo requerido que el trabajo necesite',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Modalities', null, {});
    }
};