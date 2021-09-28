const express = require("express");
const router = express.Router();

const Auth = require("../middleware/auth");

/* GET users listing. */
router.get("/", Auth, function (req, res, next) {
	res.send("respond with a resource");
});

module.exports = router;
