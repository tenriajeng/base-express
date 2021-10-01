const userModel = require("../../models/userModel");
const Response = require("../../response/response");
const jwt = require("jsonwebtoken");
const { comparePassword } = require("../../helper/hashPassword");
const authValidation = require("../../validation/auth/auth.validation");

login = async (req, res) => {
	authValidation(req, res);

	try {
		let user = await userModel.findOne(req.body.email);

		if (!user) {
			return res.status(401).json({
				error: "User not found!",
			});
		}

		const result = await comparePassword(req.body.password, user.password);

		if (!result) {
			return res.status(401).json({
				error: "Incorrect password!",
			});
		}

		const token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" });

		return Response.success(res, token);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = login;