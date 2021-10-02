const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * @param {string} password
 * hashing password
 */
async function hashingPassword(password) {
	return bcrypt.hash(password, saltRounds, (err, hash) => {
		return hash;
	});
}

/**
 * @param {string} password
 * @param {string} hash
 * Compare password with hash
 */
async function comparePassword(password, hash) {
	return bcrypt.compare(password, hash).then((valid) => {
		return valid;
	});
}

module.exports = { hashingPassword, comparePassword };
