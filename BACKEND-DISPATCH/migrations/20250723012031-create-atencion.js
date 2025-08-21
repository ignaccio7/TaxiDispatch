/* eslint-disable sort-keys */
'use strict'
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atencions', {
      id_atencion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hora_inicio: {
        type: Sequelize.TIME,
        allowNull: false
      },
      hora_fin: {
        type: Sequelize.TIME,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destino: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_conduce: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Conduces', // debe coincidir con el nombre de la tabla
          key: 'id_conduce'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id_cliente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
    await queryInterface.dropTable('Atencions')
  }
}
