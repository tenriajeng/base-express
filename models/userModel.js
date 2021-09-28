const connection = require("../database/database");

const findOne = (email) => {
	return connection
		.select("*")
		.from("users")
		.where({
			email: email,
		})
		.first();
};

module.exports = { findOne };
