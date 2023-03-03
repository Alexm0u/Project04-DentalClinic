const { Appointment, Doctor, Role, Service, User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const appointmentController = {};

appointmentController.newAppointment = async (req, res) => {
  try {
    const { service_id, user_id, doctor_id, payment, comment } = req.body;
    const newAppointment = {
      service_id: service_id,
      user_id: user_id,
      doctor_id: doctor_id,
      payment: payment,
      comment: comment,
    };
    const appointments = await Appointment.create(newAppointment);
    return res.json(appointments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// appointmentController.updateAppointment = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userId = req.params.userId;
//     const passwordcompare = bcrypt.compareSync(password, User.password);
//     const appointment = await Appointment.update(
//       {
//         email: email,
//         password: encryptedPassword,
//       },
//       {
//         where: {
//           id: userId,
//         },
//       }
//     );
//     if (!password) {
//       return res.send("Appointment not updated");
//     }
//     return res.json(appointment);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

appointmentController.deleteAppointmentById = async (req, res) => {
  const appointmentId = req.params.id;

  const deleteAppointment = await Appointment.destroy({where: {id: appointmentId}})

  return res.json(deleteAppointment);
}

module.exports = appointmentController;
