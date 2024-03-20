const express = require('express')
const path = require('path');
const cors = require('cors')
const app = express()


const db = require("./app/models/index.js");
db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));

const router = require("./app/routes/index.js");

app.use(express.json());
//Ajout des routes
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", router);



app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
  
module.exports = app;
