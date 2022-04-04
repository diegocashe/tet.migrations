'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
    users && people -> interest
     */

    await queryInterface.addConstraint('interests', {
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

    await queryInterface.addConstraint('interests', {
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    // // //  */
    //  await queryInterface.removeConstraint('interests', 'interests_user_id_users_fk');
    //  await queryInterface.removeConstraint('interests', 'interests_people_id_people_fk');

  }
};
