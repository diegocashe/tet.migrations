'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('positions', [{
                name: 'Desarrollador web',
                description: 'Encargado de la creación y elaboración de paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Diseñador web',
                description: 'Encargado a la realización de diseño de paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Administrador de base de datos',
                description: 'Administra y gestiona bases de datos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Asistente personal',
                description: 'Encargado de ayudar y organizar actividades a una persona',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Programador web',
                description: 'Persona que se encarga de la codificación de la pagina web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gerente administrativo',
                description: 'Colaboran con la dirección general en la supervisión y organización de las labores de un departamento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tutor',
                description: 'Se encarga de la tutela de una persona',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Redactor',
                description: 'Profesional experto en redacción, redacta y desarrolla textos, artículos, bibliografías, libros, manuales, etc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Asistente virtual',
                description: 'Profesional que trabaja en remoto en labores de asistencia a dirección y a los empleados de una empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ejecutivo de ventas',
                description: 'Responsable del departamento de ventas de una empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Agente de atención al cliente',
                description: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Supervisor administrativo',
                description: 'Se encarga de supervisar el control de los labores en el area administrativa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Animador',
                description: 'Encargado de realizar animaciones en 2D o 3D',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Traductor',
                description: 'Encargado de traducir textos o audios de un idioma a otro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Analista de sistemas',
                description: 'Se encarga de determinar la calidad del funcionamiento de los sistemas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dibujante',
                description: 'Realiza dibujos según la necesidad del empleador',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Desarrollador de aplicaciones móviles',
                description: 'Especialista en la creación y desarrollo de aplicaciones para teléfonos android, IOS, entre otros',
                createdAt: new Date(),
                updatedAt: new Date()
            }


        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Positions', null, {});
    }
};