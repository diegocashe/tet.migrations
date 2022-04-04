'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enterprises_legal_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // paranoid: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enterprises_legal_forms');
  }
};