const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment);
router.post('/users/appointmentmodify/:id',verifyToken, appointmentController.updateAppointment);
router.get('/users/appointment/:id',verifyToken,isAdmin, appointmentController.showappointmentByUserid);
router.get('/users/appointment/',verifyToken,isAdmin, appointmentController.showAllappointment);
router.get('/users/appointment/user/', appointmentController.showappointmentByLogin);

module.exports = router;