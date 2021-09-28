const bcrypt = require("bcrypt");
const saltRounds = 10;

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
	return bcrypt.compare(password, hash, function (err, res) {
		if (err) {
			reject(err);
		} else {
			resolve(res);
		}
	});
}

module.exports = { hashingPassword, comparePassword };
