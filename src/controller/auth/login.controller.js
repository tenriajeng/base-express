const { findOneUser } = require("../../models/userModel");
const Response = require("../../response/response");
const jwt = require("jsonwebtoken");
const { comparePassword } = require("../../helper/hashPassword");
const authValidation = require("../../validation/auth/auth.validation");
const { getRoleUser } = require("../../models/roleModel");

login = async (req, res, next) => {
	// authValidation(req, res, next);

	try {
		let user = await findOneUser(req.body.email);
		user.role = await getRoleUser(user.id);

		console.log(user);
		if (!user) {
			return res.status(401).json({
				error: "User not found!",
			});
		}

		const result = await comparePassword(req.body.password, user.password);
		delete user.password;

		if (!result) {
			return res.status(401).json({
				error: "Incorrect password!",
			});
		}

		const token = jwt.sign({ user }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" });

		return Response.success(res, token);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = login;
