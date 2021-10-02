exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("role_users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("role_users").insert([
				{ user_id: 1, role_id: 1 },
				{ user_id: 2, role_id: 2 },
				{ user_id: 1, role_id: 2 },
			]);
		});
};
