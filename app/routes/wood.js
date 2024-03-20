const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");

router.get("/readAll", woodCtrl.readAll);

router.get("/readByHardness/:hardness", woodCtrl.readByHardness);



module.exports = router;
