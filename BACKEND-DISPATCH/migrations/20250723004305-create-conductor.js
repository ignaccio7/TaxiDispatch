'use strict';
/** @type {import('sequelize-cli').Migration} */
export default{
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conductors', {
      id_conductor: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'personas', // Nombre real de la tabla personas
          key: 'id_persona'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nro_licencia: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoria: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiracion_licencia: {
        allowNull: true,
        type: Sequelize.DATE
      },
      expedicion_licencia: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Conductors');
  }
};