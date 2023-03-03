const appointmentController = require('../controllers/appointmentController');

const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment);
// router.post('/users/appointment/:id', appointmentController.updateAppointment);
router.post('/users/appointment/delete/:id', appointmentController.deleteAppointmentById);

module.exports = router;