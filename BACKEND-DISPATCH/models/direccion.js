/* eslint-disable sort-keys */
'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Direccion extends Model {
    static associate(models) {
      // Relación 1:1 con Persona
      Direccion.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  }
  Direccion.init(
    {
      id_direccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      zona: {
        type: DataTypes.STRING
      },
      calle: {
        type: DataTypes.STRING
      },
      nro_puerta: {
        type: DataTypes.STRING
      },
      id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Direccion'
    }
  )
  return Direccion
}
