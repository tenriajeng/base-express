exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("roles")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("roles").insert([
				{ id: 1, role_name: "admin" },
				{ id: 2, role_name: "user" },
			]);
		});
};
