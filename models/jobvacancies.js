'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobVacancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobVacancies.init({
    title: DataTypes.STRING,
    position_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    range_min: DataTypes.FLOAT,
    range_max: DataTypes.FLOAT,
    schedule_id: DataTypes.INTEGER,
    modality_id: DataTypes.INTEGER,
    profits_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobVacancies',
  });
  return JobVacancies;
};