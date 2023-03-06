const { User } = require("../models/index");
const roleController = {};

roleController.newRole = async (req, res) => {
    process.env.JWT_KEY
    try {
        const { email, password, role_id } = req.body;
        const user = {
        email: email,
        password: password,
        role_id: role_id
        };
        const user2 = await User.update({
        where: {
            id: User.id
        }
        });user
        return res.json(user2);
        } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = roleController;