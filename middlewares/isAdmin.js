const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    try {
        if (req.roleId !== 3){
            return res.send('You are not an Admin')
        }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;