'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publications.init({
    source: DataTypes.STRING,
    description: DataTypes.TEXT,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications',
  });
  return Publications;
};