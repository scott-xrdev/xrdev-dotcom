export const getIndeedUnityVRJobs = async () => {
	const params = new URLSearchParams({
		query: 'unity vr developer',
		page: '1',
	});

	const baseUrl = 'https://job-search4.p.rapidapi.com/indeed/search?';

	const response = await fetch(baseUrl + params.toString(), {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'job-search4.p.rapidapi.com',
			'x-rapidapi-key': 'ec043b8b52mshf6338ac396463a4p1818c4jsn203c23d88ac2',
		},
	});

	const data = await response.json();

	return data;
};

export const updateJobs = async () => {
	const response = await fetch('/api/admin/jobs', {
		method: 'POST',
	});

	const data = await response.json();
};

export const fetchJobs = async () => {
	const response = await fetch('/api/jobs', {
		method: 'GET',
	});

	const data = await response.json();

	return data;
};
