'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enterprises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  enterprises.init({
    name: DataTypes.STRING,
    legal_form_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    about: DataTypes.TEXT,
    website: DataTypes.STRING,
    foundation: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'enterprises',
  });
  return enterprises;
};