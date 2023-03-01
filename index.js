const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3000;
app.use(express.json());
const db = require('./db/db.js'); 
require('dotenv').config();



// app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/welcome', (req, res) => {
  return res.send("Bienvenido a mi app")
})