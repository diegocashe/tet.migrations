'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('profits', [{
                name: 'Seguro medico',
                description: 'Plan de gastos pagados por enfermedad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flexibilidad laboral',
                description: 'Horario laboral flexible para los trabajadores',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vacaciones pagadas',
                description: 'Dias libres con remuneración económica',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gastos de viaje pagados',
                description: 'Viajes realizados pagados por la empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dias extra de vacaciones',
                description: 'Dias libres adicionales',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Servicios de guardería',
                description: 'Servicios de cuidado para niños',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Obras sociales',
                description: 'Dias libres dedicados a la realización de obras de caridad o sociales para la comunidad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Formación y capacitación',
                description: 'Cursos y eventos para capacitar y contribuir en la formación personal y profesional de los empleados',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bonos por productividad',
                description: 'Compensaciones por altos indices de productividad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fondos de ahorro',
                description: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cheques de servicios de la empresa',
                description: 'Bonificación de bonos o cheques para gastar en productos o servicios de la empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Descuento en productos de la empresa',
                description: 'Reducción porcentual de precios en la compra de productos de la empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vivienda',
                description: 'Disponibilidad de vivienda prestado por la empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Protección por discapacidad',
                description: 'Seguros y protecciones a los empleados en caso de quedar discapacitados ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Compensación por tiempos de servicios',
                description: 'Remuneración por tiempo servido en la empresa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Seguro de vida',
                description: 'Seguros que cubren riesgo de muerto o incapacidad',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Permiso por paternidad',
                description: 'Tiempo de descanso permitido por la empresa ante caso de paternidad por parte del empleado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Permiso por maternidad',
                description: 'Tiempo de descanso permitido por la empresa ante caso de maternidad por parte del empleado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Permiso por enfermedad',
                description: 'Tiempo de descanso permitido por la empresa ante situación de enfermedad por parte del empleado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Beneficios por planes de retiro',
                description: 'Planes especiales para empleados en caso de cumplir las condiciones para entrar en estado de retiro',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Profits', null, {});
    }
};