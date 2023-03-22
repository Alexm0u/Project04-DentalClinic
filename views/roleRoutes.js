const roleController = require("../controllers/roleController");
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const router = require("express").Router();

router.put("/user/update/role/:id", verifyToken, isAdmin, roleController.newRole);

module.exports = router;