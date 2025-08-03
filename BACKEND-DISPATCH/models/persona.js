'use strict';
const {
  Model
} = require('sequelize'); //todas los modelos deben de erredar de esta clase

//se exporta una funcionq ue recibe (instancia de conexion a base de datos, objeto con los tipos de datos) 
export default (sequelize, DataTypes) => {
  class Persona extends Model {

    static associate(models) {
      // define asociacion entre modelos

      //relacion CON DIRECION
      Persona.hasOne(models.Direccion, { //declara que persona tiene una sola direccion
        foreignKey: 'id_persona',
        as: 'direccion',
        onDelete: 'RESTRIC',
        onUpdate: 'CASCADE'
      });
      //relacion con conductor
      Persona.hasOne(models.Conductor, {
        foreignKey: 'id_persona',
        as: 'conductor',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRIC'
      });
      //relacion con usuario
      Persona.hasOne(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRIC'
      });

    }
  }
  Persona.init({
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ci: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    paterno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_nac: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};