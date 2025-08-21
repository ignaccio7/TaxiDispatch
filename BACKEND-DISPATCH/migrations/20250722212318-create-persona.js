/* eslint-disable sort-keys */
'use strict'
/** @type {import('sequelize-cli').Migration} */
export default {
  //logica para crear la tabla
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id_persona: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ci: {
        allowNull: false,
        type: Sequelize.STRING //123132123-1
      },
      paterno: {
        allowNull: true,
        type: Sequelize.STRING
      },
      materno: {
        //eliminar
        allowNull: true,
        type: Sequelize.STRING
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fecha_nac: {
        allowNull: false,
        type: Sequelize.DATE
      },
      estado: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  //logica para eliminar la tabla
  async down(queryInterface) {
    await queryInterface.dropTable('Personas')
  }
}
