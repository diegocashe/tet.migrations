'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * 
     * users -> publications
     */

     await queryInterface.addConstraint('publications', {
      fields: ['user_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'Users',
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

    await queryInterface.removeConstraint('Publications', 'publications_user_id_Users_fk');

  }
};
