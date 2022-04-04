'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * education_type && education_level && scope && people && enterprise -> education
     */

     await queryInterface.addConstraint('education', {
      fields: ['people_id'],
      type: 'foreign key',
      references: { 
        table: 'people',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('education', {
      fields: ['education_level_id'],
      type: 'foreign key',
      references: { 
        table: 'education_levels',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('education', {
      fields: ['education_type_id'],
      type: 'foreign key',
      references: { 
        table: 'education_types',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('education', {
      fields: ['scope_id'],
      type: 'foreign key',
      references: { 
        table: 'scopes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    
    await queryInterface.addConstraint('education', {
      fields: ['enterprises_id'],
      type: 'foreign key',
      references: { 
        table: 'enterprises',
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
