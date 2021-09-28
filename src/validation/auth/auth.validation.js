const joi = require("joi");

const validation = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(8).required(),
});

const authValidation = (req, res) => {
	try {
		const validationResult = validation.validate({
			email: req.body.email,
			password: req.body.password,
		});

		if (validationResult.error) {
			return res.status(400).json({
				message: validationResult.error.message,
			});
		}
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

module.exports = authValidation;
