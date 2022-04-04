'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     *
     * localization && enterprise -> headquarter
     */

     await queryInterface.addConstraint('headquarters', {
      fields: ['enterprise_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'enterprises',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('headquarters', {
      fields: ['location_id'],
      type: 'foreign key',
      // name: 'rol',
      references: { //Required field
        table: 'localizations',
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
     */

    
  },


}
