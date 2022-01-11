export const submitNewBlog = async (formData) => {
	// for (var p of formData) {
	// 	console.log(p);
	// }

	const response = await fetch('/api/blogs', {
		method: 'POST',
		body: formData,
	});

	const data = await response.json();

	// if (!response.ok) {
	// 	throw new Error(data.message || 'Something went wrong.');
	// }

	return data;
};
