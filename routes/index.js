const express = require("express");
const router = express.Router();
const User = require("./users");
const loginController = require("../controller/auth/login.controller");

router.post("/login", loginController);
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.use("/user", User);
module.exports = router;
