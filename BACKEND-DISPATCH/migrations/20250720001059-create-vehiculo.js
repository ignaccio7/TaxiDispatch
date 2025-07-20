'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculos', {
      id_vehiculo: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      tipo_vehiculo: {
        type: Sequelize.STRING
      },
      placa: {
        type: Sequelize.STRING,
        unique: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehiculos');
  }
};
