const connection = require("../../config/database");
const { paginate } = require("../helper/pagination");

const findOne = (email) => {
	return connection
		.select("*")
		.from("users")
		.where({
			email: email,
		})
		.first();
};

async function findAll(page, limit) {
	let paging = await paginate(page, limit);
	console.log(paging);
	return connection.select("id", "username", "displayName", "email", "avatar", "isActive").from("users").limit(limit).offset(paging.startIndex);
}

const create = (data) => {
	return connection
		.insert({
			email: data.email,
			password: data.password,
			created_at: new Date(),
		})
		.from("users");
};

module.exports = { findOne, create, findAll };
