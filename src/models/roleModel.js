const connection = require("../../config/database");

async function getRoleUser(userId) {
	return connection
		.join("role_users", "role_users.user_id", "=", "users.id")
		.rightJoin("roles", "roles.id", "=", "role_users.role_id")
		.select("roles.id", "roles.role_name")
		.where("users.id", userId)
		.from("users");
}

module.exports = { getRoleUser };
