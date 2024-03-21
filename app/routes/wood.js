const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

router.get("/", auth, woodCtrl.readAll);
router.get("/:hardness", auth, woodCtrl.readByHardness);
router.post("/", auth, multer, woodCtrl.createWood);
router.put("/:id", auth, multer, woodCtrl.updateWood);
router.delete("/:id", auth, multer, woodCtrl.deleteWood);








module.exports = router;
