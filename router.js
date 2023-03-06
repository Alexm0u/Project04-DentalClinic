const router = require ('express').Router();

const appointmentRoutes = require('./views/appointmentRoutes');
const authRouter =  require('./views/authRoutes');
const roleRoutes =  require('./views/roleRoutes');
const userRoutes =  require('./views/userRoutes');

router.use('/', appointmentRoutes);
router.use('/', authRouter);
router.use('/', roleRoutes);
router.use('/', userRoutes);

module.exports = router;