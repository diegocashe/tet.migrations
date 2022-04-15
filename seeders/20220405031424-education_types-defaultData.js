'use strict';
/** Vacia por ahora*/
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('education_types', [{
                name: 'Presencial',
                description: 'Se asiste a las clases estando en el mismo lugar físico que el tutor y demás participantes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'A distancia / En linea',
                description: 'A traves de medios digitales como el internet se visualizan las clases impartidas por un tutor en un entorno controlado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Semi presencial',
                description: 'Tipo de aprendizaje híbrido en el cual existen actividades presenciales y a distancia según la necesidad',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Education_types', null, {});
    }
};