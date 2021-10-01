const express = require("express");
const router = express.Router();
const User = require("./users");
const loginController = require("../src/controller/auth/login.controller");
const registerController = require("../src/controller/auth/register.controller");

router.post("/login", loginController);
router.post("/register", registerController);

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.use("/user", User);

module.exports = router;
