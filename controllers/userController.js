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
        const { dni_nif, fullName, phone, email, password, payment } = req.body;
        const userId = req.userId

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUser = await User.update(
            {
                dni_nif, 
                fullName, 
                phone, 
                email, 
                password: encryptedPassword,
                payment: payment
            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUser) {
            return res.send({
                success: false,
                message: "Can't update user profile",
                error_message: error.message
            })
        }

        return res.send({
            success: true,
            message: "Updated user profile successfully",
            updateUser: updateUser
        })
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

userController.getMyUser = async(req,res) => {
    try {
        const user = await User.findByPk(req.userId);
        return res.json(
            {
                success: true,
                message: "User succesfully retrieved",
                data: user
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
}

module.exports = userController;

