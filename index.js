const express = require("express");
const cors = require("cors");
const db = require("./db/db");
require("dotenv").config();
const router = require('./router'); 
const app = express();
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};
// app.use(cors())
app.use(cors(corsOptions));
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
