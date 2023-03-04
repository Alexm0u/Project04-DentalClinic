const userController = require("../controllers/userController");
const router = require("express").Router();
const verifyToken = require('../middlewares/verifyToken');
const isStaff = require('../middlewares/IsStaff');


router.post("/user", userController.newUser);
router.get("/user", userController.getUser);
router.put("/updateuser/:id",verifyToken, userController.updateUser,);
router.get("/user/getUserAsDoctor", verifyToken, isStaff, userController.getUserAsDoctor);



module.exports = router;
