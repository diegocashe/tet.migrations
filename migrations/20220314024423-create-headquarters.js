'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('headquarters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      is_principal: {
        type: Sequelize.BOOLEAN
      },
      location_id: {
        type: Sequelize.INTEGER
      },
      enterprise_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('headquarters');
  }
};