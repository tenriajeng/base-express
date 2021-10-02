const connection = require("../../config/database");

async function findOneUser(email) {
	return connection
		.select("*")
		.from("users")
		.where({
			email: email,
		})
		.first();
}

async function getAllUser(limit, startIndex) {
	return connection.select("id", "username", "displayName", "email", "avatar", "isActive").from("users").limit(limit).offset(startIndex);
}

async function getNumberOfUsers() {
	return connection("users").count("id as count").first();
}

async function createUser(data) {
	return connection
		.insert({
			email: data.email,
			password: data.password,
			created_at: new Date(),
		})
		.from("users")
		.then(function (id) {
			return connection.select("id", "username", "displayName", "email", "avatar", "isActive", "created_at").from("users").where("id", id[0]);
		});
}

module.exports = { findOneUser, createUser, getAllUser, getNumberOfUsers };
