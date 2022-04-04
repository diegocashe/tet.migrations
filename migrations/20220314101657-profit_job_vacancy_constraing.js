'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *  profits && jobvacancy -> profit_job_vacancy
     *  
     */

     await queryInterface.addConstraint('job_vacancy_profits', {
      fields: ['profit_id'],
      type: 'foreign key',
      references: { 
        table: 'profits',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });


    await queryInterface.addConstraint('job_vacancy_profits', {
      fields: ['job_vacancy_id'],
      type: 'foreign key',
      references: { 
        table: 'job_vacancies',
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
