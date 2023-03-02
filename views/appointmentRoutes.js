const appointmentController = require('../controllers/appointmentController');

const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment)

module.exports = router;