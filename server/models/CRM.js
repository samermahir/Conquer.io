const sequelize = require('../config/connection');

const { Model, DataTypes } = require('sequelize');

class CRM extends Model {}

CRM.init(
 {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    User_Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Business_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Geocodes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sales_Pipeline_Stage: {
      type: DataTypes.STRING,
      allowNull: false
    }
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