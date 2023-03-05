const { User } = require("../models/index");
const bcrypt = require('bcrypt');
const userController = {};

userController.newUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const user = {
      fullName: fullName,
      email: email,
      password: encryptedPassword,
    };

    const users = await User.create(user);
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

userController.getUser = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
};

userController.updateUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const userId = req.params.id
    
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const updateUser = await User.update(
      {
        fullName: fullName,
        email: email,
        password: encryptedPassword
      },
      {
        where: {
          id: userId
        }
      }
    );

    if (!updateUser) {
      return res.send('User not updated')
    }

    return res.send('User updated')
  } catch (error) {
    return res.status(500).send(error.message)
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
              message: "access profiles successfully",
              user: user
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
module.exports = userController
