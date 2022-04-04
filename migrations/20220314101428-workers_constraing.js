'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * headQuarters && position -> workers
     */

     await queryInterface.addConstraint('workers', {
      fields: ['headquarter_enterprise_id'],
      type: 'foreign key',
      references: { 
        table: 'headquarters',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('workers', {
      fields: ['people_id'],
      type: 'foreign key',
      references: {
        table: 'people',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
