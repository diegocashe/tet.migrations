'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *  skills && people -> skills_people
     */
     await queryInterface.addConstraint('people_skills', {
      fields: ['people_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'people',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

     await queryInterface.addConstraint('people_skills', {
      fields: ['skill_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'skills',
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
