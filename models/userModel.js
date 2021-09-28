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

const create = (data) => {
	return connection
		.insert({
			email: data.email,
			password: data.password,
			created_at: new Date(),
		})
		.from("users");
};

module.exports = { findOne, create };
