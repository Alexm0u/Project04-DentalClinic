const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.send('Invalid token');
        }

        const [strategy, token] = authorization.split(" ");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        req.email = decoded.email
        if (req.roleId !== 3){
            return res.send('You dont have enough power')
        }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;