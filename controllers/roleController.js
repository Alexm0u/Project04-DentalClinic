const { User } = require("../models/index");
const roleController = {};

roleController.newRole = async (req, res) => {
    process.env.JWT_KEY
    try {
        const { id, email, password, role_id } = req.body;
        const newRole = {
        userid: id,
        email: email,
        password: password,
        role_id: role_id
        };
        const roleUpdate = await User.update({
        where: {
            id: User.id
        }
        });newRole
        return res.json(roleUpdate);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

module.exports = roleController;