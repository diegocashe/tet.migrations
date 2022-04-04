'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * lenguages && people && lenguages_leves -> lenguages_people
     */

    await queryInterface.addConstraint('language_people', {
      fields: ['people_id'],
      type: 'foreign key',
      references: {
        table: 'people',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('language_people', {
      fields: ['language_id'],
      type: 'foreign key',
      references: {
        table: 'languages',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('language_people', {
      fields: ['language_level_id'],
      type: 'foreign key',
      references: {
        table: 'language_levels',
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
  }
};
