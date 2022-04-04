'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job_vacancy_profits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_vacancy_id: {
        type: Sequelize.INTEGER
      },
      profit_id: {
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
    await queryInterface.dropTable('job_vacancy_profits');
  }
};