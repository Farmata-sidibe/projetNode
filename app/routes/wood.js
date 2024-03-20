const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");

router.get("/listwood", woodCtrl.listwood);
router.get("/findByHardness/:hardness", woodCtrl.findByHardness);



module.exports = router;
