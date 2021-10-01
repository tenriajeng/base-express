const express = require("express");
const router = express.Router();

const Auth = require("../middleware/auth");
const UserController = require("../src/controller/admin/user.controller");

/* GET users listing. */
router.get("/", Auth, UserController.userList);

module.exports = router;
