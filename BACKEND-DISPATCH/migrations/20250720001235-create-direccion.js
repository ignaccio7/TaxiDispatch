'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Direcciones', {
      id_direccion: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      zona: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      nro_puerta: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Direcciones');
  }
};
