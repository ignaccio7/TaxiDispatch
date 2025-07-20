'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Usuarios', {
      id_usuario: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      correo: {
        type: Sequelize.STRING,
        unique: true
      },
      clave: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.STRING
      },
      id_persona: {
        type: Sequelize.BIGINT,
        allowNull: false,
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
    await queryInterface.dropTable('Usuarios');
  }
};
