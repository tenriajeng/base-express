const jwt = require("jsonwebtoken");

/**
 * @author ILHAM TENRIAJENG
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * middleware for check authentication
 */
async function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null || token == " ") {
		return res.status(401).json({
			error: 401,
			message: "Please Provide Token",
		});
	}

	return jwt.verify(token, process.env.TOKEN_SECRET, (err, _) => {
		if (err) {
			return res.status(403).json({
				error: err.message,
			});
		}
		return next();
	});
}

module.exports = authMiddleware;
