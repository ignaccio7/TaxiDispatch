'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Conductores', {
      id_conductor: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      nro_licencia: {
        type: Sequelize.STRING,
        unique: true
      },
      expiracion_licencia: {
        type: Sequelize.DATE
      },
      id_persona: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Personas',
          key: 'id_persona'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Conductores');
  }
};
