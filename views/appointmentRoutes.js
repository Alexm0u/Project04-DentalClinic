const appointmentController = require('../controllers/appointmentController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();


router.post('/users/appointment', appointmentController.newAppointment);
router.post('/users/appointmentmodify/:id',verifyToken, appointmentController.updateAppointment);
router.get('/users/appointment/:id',verifyToken,isAdmin, appointmentController.showappointment);

module.exports = router;