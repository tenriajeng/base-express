const jwt = require("jsonwebtoken");

async function genarateAccessToken(data) {
	return jwt.sign({ data }, process.env.TOKEN_SECRET, { expiresIn: "24h" });
}

module.exports = genarateAccessToken;
