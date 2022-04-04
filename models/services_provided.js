'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services_provided extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  services_provided.init({
    people_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    scope_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'services_provided',
  });
  return services_provided;
};