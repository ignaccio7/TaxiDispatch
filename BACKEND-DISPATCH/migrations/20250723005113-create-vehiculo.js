'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculos', {
      id_vehiculo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_vehiculo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      placa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigo: {
        allowNull: true,
        type: Sequelize.STRING
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Vehiculos');
  }
};