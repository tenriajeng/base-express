const db = require("dotenv");
const path = require("path");
db.config();

module.exports = {
	development: {
		client: "mysql2",
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		},
		migrations: {
			directory: path.join(__dirname, process.env.MIGRATION_DIR),
		},
		seeds: {
			directory: path.join(__dirname, process.env.SEEDS_DIR),
		},
		pool: { min: 0, max: 10 },
	},
};
