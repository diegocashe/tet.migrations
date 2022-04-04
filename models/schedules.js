'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  schedules.init({
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    dom: DataTypes.BOOLEAN,
    lun: DataTypes.BOOLEAN,
    mar: DataTypes.BOOLEAN,
    mie: DataTypes.BOOLEAN,
    jue: DataTypes.BOOLEAN,
    vie: DataTypes.BOOLEAN,
    sab: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'schedules',
  });
  return schedules;
};