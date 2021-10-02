const faker = require("faker");

exports.seed = async function (knex) {
	await knex("users").del();

	await knex("users").insert([
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

	for (let index = 3; index <= 2003; index++) {
		await knex("users").insert(createUserFaker(index));
	}
};

const createUserFaker = (id) => ({
	id: id,
	username: faker.name.findName(),
	email: faker.internet.email(),
	password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
	displayName: faker.name.firstName(),
	avatar: faker.image.avatar(),
});
