const { Appointment, Doctor, Role, Service, User } = require("../models")
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
        const { email, password } = req.body;
        const userId = req.params.id;
        const passwordcompare = bcrypt.compareSync(password, User.password);
        const appointment = await Appointment.update(
            {
                email: email,
                password: passwordcompare
            },
            {
                where: {
                    id: userId
                }
            }
        );
        if (!password) {
            return res.send('Appointment not updated')
        }
        
        return res.send('Appointment updated!')


    } catch (error) {
        return res.status(500).send(error.message)
    }
}

appointmentController.showappointmentByLogin = async (req, res) => {
    process.env.JWT_KEY
    try {
        // const { email, password, } = req.body;
        const appointment = await Appointment.findAll(
            // {
            //     where: {
            //         user_id: req.jwt.user_id
            //     }
            // }
        )
        // const user = await User.findOne(
        //     {
        //   where: {
        //     email: email,
        //   },
        // }
        // );
        // if (!user) {
        //   return res.send("Wrong User");
        // }
        // const isMatch = bcrypt.compareSync(password, user.password);
        // if (!isMatch) {
        //   return res.send("Wrong credentials");
        // };
        return res.json(appointment);
    } catch (error) {
        
    }

}

appointmentController.showappointmentByUserid = async (req, res) => {
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
      res.status(200).json({
        message: `These are all the appointment of the userId: ${req.params.id}`,
        citasActivas,
      });
}


appointmentController.showAllappointment = async (req, res) => {
    process.env.JWT_KEY
let citasActivas = await Appointment.findAll({
    include: {
    model: User,
    attributes: ['fullName','role_id','phone'],
    },
    attributes: ['service_id', 'user_id', "doctor_id", "payment", "comment"]
  });
  res.status(200).json({
    message: `These are all the appointment in the calendar`,
    citasActivas,
  });
}


module.exports = appointmentController;