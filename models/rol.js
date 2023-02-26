const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Rol extends Model { }

Rol.init({
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [5, 50]
        }
    },
    client: DataTypes.STRING, 
    staff: DataTypes.INTEGER,
    supplier: DataTypes.INTEGER,
    sequelize,
    modelName: 'rol',
    freezeTableName: true,
    timestamps: false,
})
module.exports = Rol
