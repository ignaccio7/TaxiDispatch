/* eslint-disable sort-keys */
'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Atencion, { foreignKey: 'id_cliente' })
    }
  }
  Cliente.init(
    {
      id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      sequelize,
      modelName: 'Cliente'
    }
  )
  return Cliente
}
