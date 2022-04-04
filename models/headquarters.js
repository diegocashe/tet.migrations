'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class headquarters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  headquarters.init({
    name: DataTypes.STRING,
    is_principal: DataTypes.BOOLEAN,
    location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'headquarters',
  });
  return headquarters;
};