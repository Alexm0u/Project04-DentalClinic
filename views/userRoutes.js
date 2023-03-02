const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/user", userController.newUser);
router.get("/user", userController.getUser);

module.exports = router;
