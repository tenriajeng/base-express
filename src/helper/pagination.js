/**
 * @param {BigInteger} page
 * @param {BigInteger} limit
 * @param {BigInteger} dataLength
 * create paginate
 */
async function paginate(page = 1, limit = 10, dataLength) {
	let result = {};
	page = parseInt(page);
	limit = parseInt(limit);
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	result.currentPage = {
		page: page,
		limit: limit,
		startIndex,
		endIndex,
	};

	if (endIndex < dataLength) {
		result.nextPage = {
			page: page + 1,
			limit: limit,
		};
	}

	if (startIndex > 0) {
		result.previousPage = {
			page: page - 1,
			limit: limit,
		};
	}

	return result;
}

module.exports = { paginate };
