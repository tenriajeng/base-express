exports.up = function (knex) {
	return knex.schema.createTable("role_users", (table) => {
		table.string("user_id").nullable();
		table.string("role_id").nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("role_users");
};
