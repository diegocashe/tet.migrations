'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  education.init({
    enterprises_id: DataTypes.INTEGER,
    people_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    education_level_id: DataTypes.INTEGER,
    education_type_id: DataTypes.INTEGER,
    scope_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'education',
  });
  return education;
};