const sequelize = require('../config/connection');

const { Model, DataTypes } = require('sequelize');

// class CRM extends Model {}

const CRM = sequelize.define('CRM', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  StageNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  StageName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Zip: {
    type: DataTypes.STRING,
    allowNull: false
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false
  },
  State: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Latitude: {
    type: DataTypes.DECIMAL(10,8),
    allowNull: false
  },
  Longitude: {
    type: DataTypes.DECIMAL(11,8),
    allowNull: false
  },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'CRM'
      }
    
  );

 

  module.exports = CRM;