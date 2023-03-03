const express = require("express");
const db = require("./db/db");
require("dotenv").config();

const userRoutes = require("./views/userRoutes");
const authRoutes = require("./views/authRoutes");
const appointmentRoutes = require("./views/appointmentRoutes");

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use(appointmentRoutes);

const PORT = process.env.PORT || 3000;

app.get("/welcome", (req, res) => {
  return res.send("Bienvenido a mi app");
});

db.then(() => {
  //Starting server
  app.listen(PORT, () => console.log("Server on port " + PORT));
}).catch((err) => console.log(err.message));
