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
userController.getUserAsDoctor = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
}

module.exports = userController
