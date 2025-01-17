



const express = require('express');
const itemController = require("../controlller/user.controller");
const router = express.Router();

router.post("/login", itemController.login);
router.post("/formpost", itemController.form);
router.post("/verify-email", itemController.verifyEmail);
router.get("/verify-email/:token", itemController.confirmEmailVerification);

router.get("/hwbuser", itemController.getAllHwbDetails);
router.get("/altuser", itemController.getAllAltDetails);
router.get("/ltuser",itemController.getAllLtDetails);
router.put("/ltuser/:userId",itemController.putLtEmailDetails);


module.exports = router;
