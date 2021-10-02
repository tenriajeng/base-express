const connection = require("../../config/database");

async function getRoleUser(userId) {
	return connection.join("roles", "roles.id", "=", "role_users.role_id").select("roles.id", "roles.role_name").where("role_users.user_id", userId).from("role_users");
}

module.exports = { getRoleUser };
