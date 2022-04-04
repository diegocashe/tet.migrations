'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people_skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  people_skills.init({
    people_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER,
    validated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'people_skills',
  });
  return people_skills;
};