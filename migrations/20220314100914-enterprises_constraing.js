'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
    
     user && legal_form -> enterprise
     */

     await queryInterface.addConstraint('enterprises', {
      fields: ['user_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    await queryInterface.addConstraint('enterprises', {
      fields: ['legal_form_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'enterprises_legal_forms',
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

     await queryInterface.removeConstraint('interests', 'interests_user_id_users_fk');

  }
};
