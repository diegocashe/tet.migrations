'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {



    await queryInterface.bulkInsert('roles', [
      {
        name: 'admin',
        description: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'soporte',
        description: 'soporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Empleado',
        description: 'empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Empresa',
        description: 'empresa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
