exports.up = function (knex) {
	return knex.schema.createTable("roles", (table) => {
		table.increments();
		table.string("role_name");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("roles");
};
