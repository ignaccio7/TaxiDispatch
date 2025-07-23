'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conductor extends Model {

    static associate(models) {
      // Relación 1:1 con Persona
      Conductor.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      // relacion con conductor
      Conductor.hasMany(models.Conduce, {
        foreignKey: 'id_conductor',
        as: 'conducciones'
      });

    }
  }
  Conductor.init({
    id_conductor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nro_licencia: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiracion_licencia: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expedicion_licencia: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Conductor',
  });
  return Conductor;
};