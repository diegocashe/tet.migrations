'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job_vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      range_min: {
        type: Sequelize.FLOAT
      },
      range_max: {
        type: Sequelize.FLOAT
      },
      position_id: {
        type: Sequelize.INTEGER
      },
      schedule_id: {
        type: Sequelize.INTEGER
      },
      modality_id: {
        type: Sequelize.INTEGER
      },
      headquarter_id: {
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
    await queryInterface.dropTable('job_vacancies');
  }
};