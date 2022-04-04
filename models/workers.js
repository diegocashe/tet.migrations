'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workers.init({
    description: DataTypes.TEXT,
    enterprise_id: DataTypes.INTEGER,
    people_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workers',
  });
  return workers;
};