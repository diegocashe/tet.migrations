'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      people_id: {
        type: Sequelize.INTEGER
      },
      education_level_id: {
        type: Sequelize.INTEGER
      },
      education_type_id: {
        type: Sequelize.INTEGER
      },
      scope_id: {
        type: Sequelize.INTEGER
      },
      enterprises_id: {
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
    await queryInterface.dropTable('education');
  }
};