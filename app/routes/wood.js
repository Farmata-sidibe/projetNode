const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");

router.get("/listwood", woodCtrl.listwood);


module.exports = router;
