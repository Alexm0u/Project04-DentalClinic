'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.User);

      Doctor.hasMany(models.Appointment, {
        foreignKey: 'doctor_id',
        constraints: false,
      });

      Doctor.belongsTo(models.Service, {
        through: "Appointment",
        foreignKey: "doctor_id",
        constraints: false,
      })
    }
  }
  Doctor.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    specialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};