async function paginate(page, limit) {
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const data = {
		page,
		limit,
		startIndex,
		endIndex,
	};

	return data;
}

module.exports = { paginate };
