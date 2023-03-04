const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment);
router.post('/users/appointmentmodify/:id',verifyToken, appointmentController.updateAppointment);
router.get('/users/appointment/:id',verifyToken,isAdmin, appointmentController.showappointmentasDoctorByUserid);
router.get('/users/appointments/',verifyToken,isAdmin, appointmentController.showAllappointmentasDoctor);
router.get('/users/appointmentuser/:id',verifyToken, appointmentController.showAppointmeasUser); //User Token required
router.get('/users/appointment/user/', appointmentController.showappointmentByLogin);

module.exports = router;