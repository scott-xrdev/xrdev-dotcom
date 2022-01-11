export const createNewComment = async (commentData) => {
	const response = await fetch('/api/comments', {
		method: 'POST',
		body: JSON.stringify(commentData),
	});

	const data = await response.json();
	return data;
};

export const getComments = async (slug) => {
	const response = await fetch(`/api/comments/${slug}`, {
		method: 'GET',
	});

	const data = await response.json();
	return data;
};

export const countComments = (comments) => {
	let count = 0;

	for (let i = 0; i < comments.length; i++) {
		++count;
		count += countComments(comments[i].replies);
	}

	return count;
};

export const autopopulate = (field) =>
	function (next) {
		this.populate(field);
		next();
	};
