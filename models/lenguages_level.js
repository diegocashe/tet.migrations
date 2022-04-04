'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lenguages_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lenguages_level.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lenguages_level',
  });
  return lenguages_level;
};