



const express = require('express');
const itemController = require("../controlller/user.controller");
const router = express.Router();

router.post("/login", itemController.login);
router.get("/hwbuser", itemController.getAllHwbDetails);
router.get("/altuser", itemController.getAllAltDetails);
router.get("/ltuser",itemController.getAllLtDetails);



module.exports = router;
