const express = require("express");
const db = require("./db/db");
require("dotenv").config();
const router = require('./router'); 
const app = express();

app.use(express.json());
app.use( router); 

const PORT = process.env.PORT || 4000;

app.get("/welcome", (req, res) => {
    return res.send("Bienvenido a mi app");
});

db.then(() => {
    //Starting server
app.listen(PORT, () => console.log("Server on port " + PORT));
}).catch((err) => console.log(err.message));
