const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require("express").Router();
const verifyToken = require('../middlewares/verifyToken');
const isStaff = require('../middlewares/IsStaff');


router.post("/user", userController.newUser);
router.get("/user", userController.getUser);
router.put("/updateuser/:id", userController.updateUser);
router.get('/user/all/:id', userController.getUserAll);
router.get('/user/allbydoctor/',verifyToken, userController.getUsersasDoctor);


module.exports = router;