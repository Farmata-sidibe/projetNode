const express = require('express')
const path = require('path');
const app = express()


const db = require("./app/models/index.js");
db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));

const router = require("./app/routes/index.js");

app.use(express.json());
//Ajout des routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", router);




module.exports = app;
