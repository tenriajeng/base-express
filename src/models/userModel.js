const connection = require("../../config/database");

const findOne = (email) => {
	return connection
		.select("*")
		.from("users")
		.where({
			email: email,
		})
		.first();
};

async function findAll(limit, startIndex) {
	return connection.select("id", "username", "displayName", "email", "avatar", "isActive").from("users").limit(limit).offset(startIndex);
}

async function numberOfUsers() {
	return connection("users").count("id as count").first();
}

const create = (data) => {
	return connection
		.insert({
			email: data.email,
			password: data.password,
			created_at: new Date(),
		})
		.from("users")
		.then(function (id) {
			return connection.select("id", "username", "displayName", "email", "avatar", "isActive").from("users").where("id", id[0]);
		});
};

module.exports = { findOne, create, findAll, numberOfUsers };
