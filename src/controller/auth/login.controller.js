const { findOneUser } = require("../../models/userModel");
const Response = require("../../response/response");
const { comparePassword } = require("../../helper/hashPassword");
const { getRoleUser } = require("../../models/roleModel");
const genarateAccessToken = require("../../helper/genarateAccessToken");

/**
 * @param {Request} req
 * @param {Response} res
 * login user
 */
async function login(req, res) {
	try {
		let user = await findOneUser(req.body.email);

		if (!user) {
			return res.status(401).json({
				error: "User not found!",
			});
		}

		const result = await comparePassword(req.body.password, user.password);
		user.role = await getRoleUser(user.id);
		delete user.password;

		if (!result) {
			return res.status(401).json({
				error: "Incorrect password!",
			});
		}

		const token = await genarateAccessToken(user);

		return Response.success(res, token);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
}

module.exports = login;
