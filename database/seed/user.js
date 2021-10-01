const faker = require("faker");

exports.seed = async function (knex, Promise) {
	let fakeUsers = [];
	for (let index = 1; index <= 2000; index++) {
		fakeUsers.push(createUserFaker());
	}

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

	await knex("users").insert(fakeUsers);
};

const createUserFaker = () => ({
	username: faker.name.findName(),
	email: faker.internet.email(),
	password: "$2a$12$jqU0F.lXN2x2FZFTExLygO.ku4Pay8k3usPLTS7RF5XgTUE.h7MUC",
	displayName: faker.name.firstName(),
	avatar: faker.image.avatar(),
});
