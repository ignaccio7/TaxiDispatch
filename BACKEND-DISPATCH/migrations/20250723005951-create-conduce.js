'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conduces', {
      id_conduce: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_conductor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'conductors', // nombre exacto de la tabla conductores
          key: 'id_conductor'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_vehiculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'vehiculos',
          key: 'id_vehiculo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Conduces');
  }
};