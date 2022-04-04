'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'HTML',
        description: 'Estructura de páginas web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        description: 'Estilos para páginas web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BOOTSTRAP',
        description: 'Framework de estilos para páginas web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Javascript',
        description: 'Lenguaje de programación para páginas web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Excel',
        description: 'Aplicación informática para gestion administrativa de bases de datos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Skills', null, {});
  }
};
