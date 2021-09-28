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
					password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
					isActive: true,
				},
				{
					id: 2,
					username: "user",
					displayName: "ilhamtenriajeng",
					email: "ilhamtenriajeng@gmail.com",
					password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
					isActive: true,
				},
			]);
		});
};
