'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * state -> localization
     */

     await queryInterface.addConstraint('localizations', {
      fields: ['state_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'states',
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
