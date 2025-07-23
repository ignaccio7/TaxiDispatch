'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atencion extends Model {
    static associate(models) {
      Atencion.belongsTo(models.Conduce, {
        foreignKey: 'id_conduce',
        as: 'conduce'
      });
      Atencion.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'cliente'
      });
      Atencion.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
    }
  }
  Atencion.init({
     id_atencion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING
    },
    destino: {
      type: DataTypes.STRING
    },
    id_conduce: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Atencion',
  });
  return Atencion;
};