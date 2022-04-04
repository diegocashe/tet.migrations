'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * country -> state
     *  
     */

     await queryInterface.addConstraint('states', {
      fields: ['country_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'countries',
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
