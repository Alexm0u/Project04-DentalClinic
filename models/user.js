const nodemon = require('nodemon');
const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class User extends Model { };

User.init({
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [5, 50]
        }
    },
    dni_nif: DataTypes.STRING,
    full_name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.TEXT,
    comments: DataTypes.STRING,

    
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false,
    }
)

module.exports = User