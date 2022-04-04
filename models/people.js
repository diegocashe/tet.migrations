'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  people.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    localization_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    about: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'people',
  });
  return people;
};