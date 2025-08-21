/* eslint-disable sort-keys */
'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    static associate(models) {
      // relacion con conduce
      Vehiculo.hasMany(models.Conduce, {
        foreignKey: 'id_vehiculo',
        as: 'conducciones'
      })
    }
  }
  Vehiculo.init(
    {
      id_vehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo_vehiculo: DataTypes.STRING,
      placa: DataTypes.STRING,
      codigo: DataTypes.STRING,
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      sequelize,
      modelName: 'Vehiculo'
    }
  )
  return Vehiculo
}
