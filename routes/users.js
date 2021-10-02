const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const UserController = require("../src/controller/admin/user.controller");

/* GET users listing. */
router.get("/", authMiddleware, UserController.userList);

module.exports = router;
