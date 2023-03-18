const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/IsStaff');
const router = require("express").Router();

router.post("/user", userController.newUser);
router.get("/user", verifyToken, isAdmin, userController.getAllUser);
router.put("/updateuser/:id",verifyToken, userController.updateUser,);
router.put("/updateuser/role/:id",verifyToken, isAdmin, userController.updateRole,);
router.get("/user/findAllUsersDoctor", verifyToken, isStaff, userController.findAllUsersDoctor);
router.get("/user/profile", verifyToken, userController.getUserbyId);
router.get("/user/myprofile", verifyToken, userController.getMyUser);




module.exports = router;