const userModel = require("../../models/userModel");
const Response = require("../../response/response");
const jwt = require("jsonwebtoken");
const hashingPassword = require("../../helper/hashPassword");

login = async (req, res) => {
	try {
		let token;
		let user = await userModel.findOne(req.body.email);

		if (!user) {
			return res.status(401).json({
				error: "User not found!",
			});
		}

		const result = await hashingPassword.comparePassword(req.body.password, user.password);

		if (!result) {
			return res.status(401).json({
				error: "Incorrect password!",
			});
		}

		token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" });

		return Response.success(res, token);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = login;
