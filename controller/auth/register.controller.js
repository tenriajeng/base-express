const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const Response = require("../../response/response");

register = async (req, res) => {
	let data = req.body;

	try {
		data.password = await bcrypt.hash(req.body.password, 10).then((hash) => {
			return hash;
		});

		await userModel.create(data);

		return Response.success(res, data);
	} catch (error) {
		if (error.code == "ER_DUP_ENTRY") {
			return res.status(403).json({
				message: "Email already registered",
			});
		}
	}
};
module.exports = register;
