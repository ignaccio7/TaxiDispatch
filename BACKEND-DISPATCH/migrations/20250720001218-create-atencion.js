'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Atenciones', {
      id_atencion: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      id_usuario: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_vehiculo: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Vehiculos',
          key: 'id_vehiculo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_conductor: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Conductores',
          key: 'id_conductor'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fecha: Sequelize.DATE,
      hora_inicio: Sequelize.TIME,
      hora_fin: Sequelize.TIME,
      estado: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Atenciones');
  }
};
