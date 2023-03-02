const appointmentController = require('../controllers/appointmentController');

const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment);
router.post('/users/appointment/:id', appointmentController.updateAppointment);

module.exports = router;