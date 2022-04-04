'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postulation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postulation.init({
    job_vacancies_id: DataTypes.INTEGER,
    people_id: DataTypes.INTEGER,
    viewed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'postulation',
  });
  return postulation;
};