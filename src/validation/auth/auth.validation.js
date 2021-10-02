const joi = require("joi");
const { NextFunction } = require("express");

const validation = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(8).required(),
});

const authValidation = (req, res, next) => {
	try {
		const validationResult = validation.validate({
			email: req.body.email,
			password: req.body.password,
		});

		console.log(validationResult.error);

		if (validationResult.error) {
			return res
				.status(400)
				.json({
					message: validationResult.error.message,
				})
				.end();
		} else {
			return next();
		}
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

module.exports = authValidation;
