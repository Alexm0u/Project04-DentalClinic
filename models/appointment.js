const nodemon = require('nodemon');
const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class User extends Model { };

Appointment.init({
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [5, 50]
        }
    },
    date: DataTypes.DATE,
    payment: DataTypes.STRING,

    
    sequelize,
    modelName: 'appointment',
    freezeTableName: true,
    timestamps: false,
    }
)

module.exports = Appointment