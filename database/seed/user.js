exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					username: "admin",
					displayName: "ilham",
					email: "ilham@gmail.com",
					password: "12345678",
					isActive: true,
				},
				{
					id: 2,
					username: "user",
					displayName: "ilhamtenriajeng",
					email: "ilhamtenriajeng@gmail.com",
					password: "12345678",
					isActive: true,
				},
			]);
		});
};
