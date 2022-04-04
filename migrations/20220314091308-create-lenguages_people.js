'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('language_people', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      people_id: {
        type: Sequelize.INTEGER
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      language_level_id: {
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
    await queryInterface.dropTable('language_people');
  }
};