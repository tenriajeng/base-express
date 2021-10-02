const { paginate } = require("../../helper/pagination");
const userModel = require("../../models/userModel");
const Response = require("../../response/response");

userList = async (req, res) => {
	try {
		let users = await userModel.numberOfUsers();

		let paging = await paginate(req.query.page, req.query.limit, users.count);

		users = await userModel.findAll(paging.currentPage.limit, paging.currentPage.startIndex);

		return Response.success(res, users, paging);
	} catch (error) {
		return res.status(400).json({ err: error.message });
	}
};

module.exports = { userList };
