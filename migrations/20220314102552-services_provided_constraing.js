'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *  services && scope && people -> services_provided
     */
     await queryInterface.addConstraint('services_provided', {
      fields: ['people_id'],
      type: 'foreign key',
      references: {
        table: 'people',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('services_provided', {
      fields: ['service_id'],
      type: 'foreign key',
      references: {
        table: 'services',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('services_provided', {
      fields: ['scope_id'],
      type: 'foreign key',
      references: {
        table: 'scopes',
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
