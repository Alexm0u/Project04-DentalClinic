const jwt = require('jsonwebtoken');

const isStaff = (req, res, next) => {
    try {
        if (req.roleId !== 2){
            return res.send('You are not a Doctor')
        }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isStaff;