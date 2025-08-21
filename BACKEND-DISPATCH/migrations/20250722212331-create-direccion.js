/* eslint-disable sort-keys */
'use strict'
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Direccions', {
      id_direccion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zona: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      nro_puerta: {
        type: Sequelize.STRING
      },
      //refencia a la tabla personas
      id_persona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true, //asegura que sea 1:1
        references: {
          model: 'Personas', // Nombre de la tabla personas en la BD
          key: 'id_persona'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  async down(queryInterface) {
    await queryInterface.dropTable('Direccions')
  }
}
