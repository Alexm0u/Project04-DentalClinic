const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/IsStaff');
const router = require('express').Router();

router.post('/appointment',verifyToken, appointmentController.newAppointment);
router.get('/appointmentuser',verifyToken, appointmentController.showAppointmeasUser);  
router.put('/appointment/update/:id',verifyToken, appointmentController.updateAppointment);
router.get('/appointment/:id',verifyToken,isStaff, appointmentController.showAppointmentasDoctorByUserid);
router.get('/appointments',verifyToken,isAdmin, appointmentController.getAllAppointment);
router.delete('/appointment/deleteall',verifyToken,appointmentController.deleteAllAppointment);  
router.get('/appointmentAsDoctor', verifyToken, isStaff, appointmentController.getMyAppointmentsAsDoctor);

module.exports = router;