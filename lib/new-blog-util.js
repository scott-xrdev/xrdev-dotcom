export const submitNewBlog = async (blogDetails) => {
	const response = await fetch('/api/blogs', {
		method: 'POST',
		body: JSON.stringify(blogDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong.');
	}

	return data;
};
