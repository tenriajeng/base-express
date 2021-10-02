const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const Response = require("../../response/response");
const jwt = require("jsonwebtoken");

register = async (req, res) => {
	let data = req.body;

	try {
		data.password = await bcrypt.hash(req.body.password, 10).then((hash) => {
			return hash;
		});

		let [user] = await userModel.create(data);

		token = jwt.sign({ userId: user }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" });

		return Response.success(res, token);
	} catch (error) {
		if (error.code == "ER_DUP_ENTRY") {
			return res.status(403).json({
				message: "Email already registered",
			});
		}
	}
};
module.exports = register;
