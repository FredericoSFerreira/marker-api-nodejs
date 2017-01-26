'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    id:   {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    nome: {type: DataTypes.STRING(45), allowNull: false, unique: false},
     email: {type: DataTypes.STRING(45), allowNull: false, unique: true},
     telefone: {type: DataTypes.STRING(45), allowNull: false, unique: true},
     perfil: {type: DataTypes.STRING(45), allowNull: false, unique: false},
     cpf: {type: DataTypes.STRING(45), allowNull: false, unique: true},
     senha: {type: DataTypes.STRING(45), allowNull: false, unique: false},
     status: {type: DataTypes.STRING(45), allowNull: false, unique: false}
     
  });
  return Users;
};