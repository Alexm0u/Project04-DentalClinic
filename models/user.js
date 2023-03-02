'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(
        models.Role,
        {
          foreignKey: 'role_id'
      })
      // User.belongsToMany(
      //   models.Service,
      //   {
      //     through: 'Appointment',
      //     foreignKey: 'user_id'
      // })
    }
  }
  User.init({
    dni_nif: DataTypes.STRING,
    fullName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    payment: DataTypes.STRING,
    comments: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};