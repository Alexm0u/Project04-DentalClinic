const { User } = require("../models/index");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
        {
            where: {
                email: email
            }
        }
    );

    if (!user) {
        return res.send('Wrong User')
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
        return res.send('Wrong credentials')
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            roleId: user.role_Id
        },
        'secreto',
        { expiresIn: '2h'}
    );
    
    return res.json(token)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = authController;
