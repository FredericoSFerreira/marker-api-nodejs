'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
        email: {
        type: Sequelize.STRING
      },
          telefone: {
        type: Sequelize.STRING
      },
                perfil: {
        type: Sequelize.STRING
      },
                      cpf: {
        type: Sequelize.STRING
      },
                            senha: {
        type: Sequelize.STRING
      },
                                  status: {
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
    return queryInterface.dropTable('users');
  }
};