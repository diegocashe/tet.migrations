'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_vacancy_profits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job_vacancy_profits.init({
    job_vacancy_id: DataTypes.INTEGER,
    profit_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'job_vacancy_profits',
  });
  return job_vacancy_profits;
};