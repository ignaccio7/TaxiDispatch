'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      Usuario.belongsTo(models.Persona, {
        foreignKey: 'id_usuario',
        as: 'persona',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Usuario.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};