const { Appointment, Doctor, Role, Service, User } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const appointmentController = {};

appointmentController.newAppointment = async (req, res) => {
    process.env.JWT_KEY
    req.params.id;
    try {
        const { service_id, user_id, doctor_id, payment, comment } = req.body;
        const newAppointment = {
            service_id: service_id,
            userId: user_id,
            doctor_id: doctor_id,
            payment: payment,
            comment: comment
        }
        const appointments = await Appointment.create(newAppointment)
        return res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

appointmentController.updateAppointment = async (req, res) => {
    try {
        const actualizar = req.body;
        await Appointment.update(
            {
            service_id: actualizar.service_id,
            user_id: actualizar.user_id,
            doctor_id: actualizar.doctor_id, 
            payment: actualizar.payment,
            comment: actualizar.comment,
            },
            {
            where: {
                user_id: req.userId 
            },
            }
        );
        res.json({
            message: "Actualizada cita correctamente",
        });
        } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        });
    }
}

appointmentController.showappointmentasDoctorByUserid = async (req, res) => {
    try {
        req.params.id;
        process.env.JWT_KEY
    let citasActivas = await Appointment.findAll({
        where: {
            user_id: req.params.id,
        },
        include: {
        model: User,
        attributes: ['fullName','role_id','phone'],
        },
        attributes: ['service_id', 'user_id', "doctor_id", "payment", "comment"]
        });
        res.json({
        message: `These are all the appointment of the userId: ${req.params.id}`,
        citasActivas,
        });
        } catch (error) {
            console.error(error);
            res.status(500).json({
            error: error.message,
            }
        )
    }
}


appointmentController.getAllAppointment = async (req, res) => {
    process.env.JWT_KEY
let citasActivas = await Appointment.findAll({
    // include: {
    // model: User,
    // attributes: ['fullName','role_id','phone'],
    // },
    attributes: ['service_id', 'user_id', "doctor_id", "payment", "comment"]
  });
  res.status(200).json({
    message: `These are all the appointment in the calendar`,
    citasActivas,
  });
}


appointmentController.showAppointmeasUser = async (req, res) => {
    try {
        const userCitas = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId 
                },
                include: [
                    Service,
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["user_id", "doctor_id", "service_id"]
                }
            }
        )
        return res.json(userCitas)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

appointmentController.deleteAllAppointment = async (req, res) => {
    try {
        const userCitas = await Appointment.destroy(
            {
                where: { 
                    user_id: req.userId 
                },
            }
        )
        return res.json(userCitas)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = appointmentController;