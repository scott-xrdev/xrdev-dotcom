export const createNewComment = async (commentData) => {
	const response = await fetch('/api/comments', {
		method: 'POST',
		body: JSON.stringify(commentData),
	});

	const data = await response.json();
	return data;
};
