'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('markers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.STRING
      },
        lng: {
        type: Sequelize.STRING
      },
              status: {
        type: Sequelize.STRING
      },
              endereco: {
        type: Sequelize.STRING
      },
                    tipo: {
        type: Sequelize.STRING
      },
                    obs: {
        type: Sequelize.STRING
      },
              bairro: {
        type: Sequelize.STRING
      },
              foto: {
        type: Sequelize.TEXT
      },
                    nome_usuario: {
        type: Sequelize.STRING
      },
                    telefone_usuario: {
        type: Sequelize.STRING
      },
                    tipo_usuario: {
        type: Sequelize.STRING
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('markers');
  }
};