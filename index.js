const express = require("express");
const { User } = require("./models/");
const app = express();
const PORT = 3000;
app.use(express.json());
// const db = require('./db/db.js');
require('dotenv').config();
// app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
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
        const user = await User.create(newUser)
        return res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.get('/user', async (req,res) => {
    const user = await User.findAll();
    res.send(user);
})

// db.then(() => {
//     //Starting server
//     app.listen(PORT, () => console.log("Server on port " + PORT));
// })
//     .catch((err) => console.log(err.message));   
