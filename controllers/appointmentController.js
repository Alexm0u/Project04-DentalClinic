const { Appointment, Service, User } = require("../models")
const appointmentController = {};

appointmentController.newAppointment = async (req, res) => {
    try {
        const { service_id, user_id, doctor_id, payment, date } = req.body;
        const newAppointment = {
            service_id: service_id,
            user_id: req.userId,
            doctor_id: doctor_id,
            payment: payment,
            date: date
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
        const appointmentupdated = await Appointment.update(
            {
            service_id: actualizar.service_id,
            user_id: actualizar.user_id,
            doctor_id: actualizar.doctor_id, 
            payment: actualizar.payment,
            date: actualizar.date,
            },
            {
            where: {
                id: req.params.id, 
                user_id: req.userId
            },
            }
        );
        console.log(appointmentupdated) 
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

appointmentController.showAppointmentasDoctorByUserid = async (req, res) => {
    try {
        req.params.id;
    let citasActivas = await Appointment.findAll({
        where: {
            user_id: req.params.id,
        },
        include: {
        model: User,
        attributes: ['fullName','role_id','phone'],
        },
        attributes: ['service_id', 'user_id', "doctor_id", "payment", "date"]
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
    try {
        let citasActivas = await Appointment.findAll({
            include: {
            model: User,
            attributes: ['fullName','role_id','phone'],
            },
            attributes: ['service_id', 'user_id', "doctor_id", "payment", "date"]
        });
            res.status(200).json({
            message: `These are all the appointment in the calendar`,
            citasActivas,
        });   
    } catch (error) {
        return res.status(500).send(error.message)
    }


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