const express = require("express");
const { login } = require("../controllers/login.controller");
const { register } = require("../controllers/registration.controller");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

module.exports=router;