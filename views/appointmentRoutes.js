const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require('express').Router();

router.post('/appointment',verifyToken, appointmentController.newAppointment);
router.put('/appointmentmodify/',verifyToken, appointmentController.updateAppointment);
router.get('/appointment/:id',verifyToken,isAdmin, appointmentController.showappointmentasDoctorByUserid);
router.get('/appointments/',verifyToken,isAdmin, appointmentController.getAllAppointment);
router.get('/appointmentuser/',verifyToken, appointmentController.showAppointmeasUser);                  
router.delete('/appointment/deleteall',verifyToken,appointmentController.deleteAllAppointment);  

module.exports = router;