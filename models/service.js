'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        static associate(models) {
        // define association here
        Service.belongsToMany(
            models.User,
            {
            through: 'Appointment',
            foreignKey: 'service_id',
            constraints: false,
            // as: "citas"
        })
      }
    }
    Service.init({
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
        servicename: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        duration: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Service',
    });
    return Service;
};