'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Personas', {
      id_persona: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false
      },
      ci: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      paterno: {
        type: Sequelize.STRING,
        allowNull: false
      },
      materno: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombres: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};
