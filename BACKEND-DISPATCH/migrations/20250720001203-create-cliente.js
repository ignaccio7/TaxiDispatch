'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id_cliente: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      familia: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Clientes');
  }
};
