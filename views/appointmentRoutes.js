const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require('express').Router();


router.post('/appointment',verifyToken, appointmentController.newAppointment);
router.put('/appointmentmodify/',verifyToken, appointmentController.updateAppointment);
router.get('/appointment/:id',verifyToken,isAdmin, appointmentController.showappointmentasDoctorByUserid);
router.get('/appointments/',verifyToken,isAdmin, appointmentController.showAllappointmentasDoctor);
router.get('/appointmentuser/',verifyToken, appointmentController.showAppointmeasUser); //User Token required
router.delete('/appointment/deleteall',verifyToken,appointmentController.deleteAllAppointment); //Delete all Appointment with Token
router.delete('/appointment/delete',verifyToken,appointmentController.deleteAppointment); //Delete all Appointment with Token

module.exports = router;