'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculo_Conductores', {
      id_vehiculo: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        references: {
          model: 'Vehiculos',
          key: 'id_vehiculo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_conductor: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        references: {
          model: 'Conductores',
          key: 'id_conductor'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      estado: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehiculo_Conductores');
  }
};
