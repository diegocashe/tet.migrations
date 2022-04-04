'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // roles -> users
    await queryInterface.addConstraint('users', {
      fields: ['role_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'Roles',
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

    await queryInterface.removeConstraint('users', 'users_role_id_Roles_fk');
  }
};
