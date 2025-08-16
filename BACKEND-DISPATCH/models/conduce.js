'use strict';
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Conduce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relacion con conductor
      Conduce.belongsTo(models.Conductor, {
        foreignKey: 'id_conductor',
        as: 'conductor',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      // relacion con vehiculo
      Conduce.belongsTo(models.Vehiculo, {
        foreignKey: 'id_vehiculo',
        as: 'vehiculo',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Conduce.init({
    id_conduce: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_conductor: DataTypes.INTEGER,
    id_vehiculo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conduce',
  });
  return Conduce;
};