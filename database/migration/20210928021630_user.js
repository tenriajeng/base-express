exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("username", 50).nullable();
		table.string("displayName", 50).nullable();
		table.string("email", 50).notNullable().unique();
		table.string("password").notNullable();
		table.string("avatar").nullable();
		table.string("isActive").defaultTo(false);
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
