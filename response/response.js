const success = (res, data) => {
	return res.status(200).json({
		code: res.statusCode,
		message: "Success",
		data: data,
	});
};
const error = (res, data) => {
	return res.status(300).json({
		code: res.statusCode,
		message: "Error",
		data: data,
	});
};
const notFound = (res, data) => {
	return res.status(400).json({
		code: res.statusCode,
		message: "Success",
		data: data,
	});
};

module.exports = { success, error, notFound };
