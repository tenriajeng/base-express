const { createUser } = require("../../models/userModel");
const bcrypt = require("bcrypt");
const Response = require("../../response/response");
const genarateAccessToken = require("../../helper/genarateAccessToken");

/**
 * @param {Request} req
 * @param {Response} res
 * register user
 */
register = async (req, res) => {
	let data = req.body;

	try {
		data.password = await bcrypt.hash(req.body.password, 10).then((hash) => {
			return hash;
		});

		let [user] = await createUser(data);

		const token = await genarateAccessToken(user);

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
