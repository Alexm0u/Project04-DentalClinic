const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require("express").Router();
const isStaff = require('../middlewares/IsStaff');

router.post("/user", userController.newUser);
router.get("/user", userController.getUser);
router.put("/updateuser/:id",verifyToken, userController.updateUser,);
router.get("/user/findAllUsersDoctor", verifyToken, isStaff, userController.findAllUsersDoctor);
router.get("/user/profile", verifyToken, userController.getUserbyId);

module.exports = router;