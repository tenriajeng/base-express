const userModel = require("../../models/userModel");
const Response = require("../../response/response");

userList = async (req, res) => {
	try {
		let user = await userModel.findAll(req.query.page, req.query.limit);

		console.log(user);
		return Response.success(res, user);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { userList };
