'use strict';
module.exports = (sequelize, DataTypes) => {
  var Markers = sequelize.define('Markers', {
    id:   {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    lat: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    lng: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    status: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    endereco: {type: DataTypes.STRING(500), allowNull: true, unique: true},
    tipo: {type: DataTypes.STRING(500), allowNull: true, unique: false},
    obs: {type: DataTypes.STRING(500), allowNull: true, unique: false},
    bairro: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    foto: {type: DataTypes.TEXT(), allowNull: true},
    nome_usuario: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    telefone_usuario: {type: DataTypes.STRING(45), allowNull: true, unique: false},
    tipo_usuario: {type: DataTypes.STRING(45), allowNull: true, unique: false}
  });
  return Markers;
};