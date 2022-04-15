'use strict';
/** Vacia por ahora*/
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('education_levels', [{
                name: 'Inicial / Preescolar',
                description: 'Educación básica para niños de 3 a 6 años',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Educación Básica',
                description: 'Comprende las tres etapas de grados de primaria desde el primer grado hasta el noveno grado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Media Diversificada y Profesional',
                description: 'Constituye el nivel siguiente al de Educación Básica y previo al de Educación Superior en el cual se estudian décimo y undécimo grado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Técnico superior',
                description: 'Egresado de un centro de formación técnica o de un instituto profesional que ha aprobado un programa de estudios superior al bachillerato',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Licenciatura',
                description: 'Grado académico obtenido al culminar la carrera profesional tu carrera profesional o programa de estudios superiores con una duración de 4 a 6 años según la carrera',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ingeniería',
                description: 'Grado académico obtenido al culminar la carrera profesional con una duración de 4 a 6 años',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Maestría',
                description: 'Grado académico de postgrado con una duración minima de 500 horas (se estima entre 1 y 2 años)',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctorado',
                description: 'Máximo grado de educación de postgrado con una duración entre 3 y 6 años',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Education_levels', null, {});
    }
};