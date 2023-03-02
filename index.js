const express = require('express');
const { User } = require('./models/index')
const db = require('./db/db');
require('dotenv').config()

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })


app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

app.post('/user', async (req, res) => {
    try{
        const {fullName, email, password } = req.body;
        const newUser = {
            fullName: fullName,
            email: email,
            password: password
        }
        const users = await User.create(newUser)
        return res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// app.get('/username', async(req, res)=> {
//     const users = await User.findAll({
//         attributes: ['fullName','email']} )
//             return res.json(users);
//     })

app.get('/user', async(req, res)=> {
    const users = await User.findAll();
    return res.json(users);
})


db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   