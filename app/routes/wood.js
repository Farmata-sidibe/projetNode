const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");

router.get("/listwood", woodCtrl.listwood);
// router.get("/listwood", function (req, res) {
//   res.send("List of woods");
// });

module.exports = router;
