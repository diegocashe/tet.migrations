'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.INTEGER
      },
      end_time: {
        type: Sequelize.INTEGER
      },
      dom: {
        type: Sequelize.BOOLEAN
      },
      lun: {
        type: Sequelize.BOOLEAN
      },
      mar: {
        type: Sequelize.BOOLEAN
      },
      mie: {
        type: Sequelize.BOOLEAN
      },
      jue: {
        type: Sequelize.BOOLEAN
      },
      vie: {
        type: Sequelize.BOOLEAN
      },
      sab: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('schedules');
  }
};