'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     localization && user -> people
     */
    
     await queryInterface.addConstraint('people', {
      fields: ['localization_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'localizations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    await queryInterface.addConstraint('people', {
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
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here. 
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     * people_localization_id_localizations_fk
     * people_user_id_users_fk
     */

    //  await queryInterface.removeConstraint('people', 'people_localization_id_localizations_fk');
    //  await queryInterface.removeConstraint('people', 'people_user_id_users_fk');

  }
};
