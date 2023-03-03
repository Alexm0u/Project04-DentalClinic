'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      // Appointment.belongsTo(models.Service, {
      //   foreignKey: 'service_id'
      // });
      // Appointment.belongsTo(models.User, {
      //   foreignKey: 'user_id'
      // });
      // Appointment.belongsTo(models.Doctor, {
      //   foreignKey: 'doctor_id'
      // });

      
    }
  }
  Appointment.init({
    service_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    payment: DataTypes.BOOLEAN,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};