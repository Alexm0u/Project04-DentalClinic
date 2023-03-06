'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
        // define association here
        Role.hasMany(models.User, {
            foreignKey: 'role_id',
            constraints: false,
        })
        }
    }
    Role.init({
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
};