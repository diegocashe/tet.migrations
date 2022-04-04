'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *  position && schedule && modality && headsquarters -> job_vacancy
     */

     await queryInterface.addConstraint('job_vacancies', {
      fields: ['position_id'],
      type: 'foreign key',
      references: { 
        table: 'positions',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('job_vacancies', {
      fields: ['schedule_id'],
      type: 'foreign key',
      references: { 
        table: 'schedules',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('job_vacancies', {
      fields: ['modality_id'],
      type: 'foreign key',
      references: { 
        table: 'modalities',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('job_vacancies', {
      fields: ['headquarter_id'],
      type: 'foreign key',
      references: { 
        table: 'headquarters',
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
