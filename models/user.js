const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class User extends Model { }

User.init({
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [5, 50]
        }
    },
    full_name: DataTypes.STRING, 
    dni_nif: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.TEXT,
    comments: DataTypes.STRING,
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false,
})
module.exports = Usuario
