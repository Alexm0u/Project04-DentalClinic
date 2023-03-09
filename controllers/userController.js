const { User } = require("../models/index");
const bcrypt = require('bcrypt');
const userController = {};

userController.newUser = async (req, res) => {
    try {
        const {dni_nif, fullName, phone, email, password, payment, comments} = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const user = {
        dni_nif: dni_nif,
        fullName: fullName,
        phone: phone,
        email: email,
        password: encryptedPassword,
        payment: payment,
        comments: comments,
        role_id: 1
        };
        const users = await User.create(user);
        return res.json(users);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}


userController.getAllUser = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
};

userController.updateUser = async (req, res) => {
    try {
        const { role_id } = req.body;
        const updateUser = await User.update(
        {
            role_id: role_id,
        },
        {
            where: {
            id: req.userId
            }
        }
        );
        if (!updateUser) {
        return res.send('User not updated')
        }
        return res.send('User updated')
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

userController.updateRole = async (req, res) => {
    try {
        const { fullName, email, password, role_id } = req.body;
        const userId = req.params.id
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const updateUser = await User.update(
        {
            fullName: fullName,
            email: email,
            password: encryptedPassword,
            role_id: role_id
        },
        {
            where: {
            id: userId
            }
        }
        );
        if (!updateUser) {
        return res.send('Role not updated')
        }
        return res.send('Role updated')
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

userController.findAllUsersDoctor = async (req, res) => {
    try {
        const user = await User.findAll(
            {
                attributes: {
                    exclude: ["password"]
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Estos son todos los perfiles que hay :",
                usuarios: user
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}

userController.getUserbyId= async(req, res)=> {
    try {
        const userId = req.params.id;
        const roleuser = await User.findByPk(userId, {
            include: {all: true}
        }); 
        return res.json(roleuser);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

module.exports = userController;

