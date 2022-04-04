'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * jobVacancy && people -> postulacion
     */

    
     await queryInterface.addConstraint('postulations', {
      fields: ['job_vacancies_id'],
      type: 'foreign key',
      references: { 
        table: 'job_vacancies',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('postulations', {
      fields: ['people_id'],
      type: 'foreign key',
      references: { 
        table: 'people',
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
