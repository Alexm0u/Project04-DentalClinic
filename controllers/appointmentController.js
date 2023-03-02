const { Appointment, Doctor, Role, Service, User } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const appointmentController = {};

appointmentController.newAppointment = async (req, res) => {
    try {
        // Recuperamos la informacion a traves de la req
        // const name = req.body.name;
        // const description = req.body.description;
        // const price = req.body.price;

        const { service_id, user_id, doctor_id, payment, comment } = req.body;

        const newAppointment = {
            service_id: service_id,
            user_id: user_id,
            doctor_id: doctor_id,
            payment: payment,
            comment: comment
        }

        // Guardar la informacion
        const appointments = await Appointment.create(newAppointment)

        return res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = appointmentController;