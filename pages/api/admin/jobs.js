import { getSession } from 'next-auth/react';

import { connectToDatabase } from '../../../lib/db';
import { getIndeedUnityVRJobs } from '../../../lib/jobs-util';

const handler = async (req, res) => {
	if (req.method !== 'POST') return;

	const session = await getSession({ req: req });

	if (!session) {
		res.status(401).json({ message: 'Not authenticated.' });
		return;
	}

	if (!session.isAdmin) {
		res.status(403).json({ message: 'Not authorized.' });
	}

	const client = await connectToDatabase();
	const jobsCollection = client.db().collection('jobs');

	try {
		await jobsCollection.deleteMany({});
	} catch (error) {
		client.close();
		return res.status(500).json({
			message: 'Something went wrong when deleting original jobs from database',
		});
	}

	let data;
	try {
		data = await getIndeedUnityVRJobs();
		console.log(data);
	} catch (error) {
		client.close();
		return res
			.status(500)
			.json({ message: 'Something went wrong when fetching new jobs' });
	}

	let jobs;
	try {
		jobs = await jobsCollection.insertMany(data.jobs);
		console.log(jobs);
	} catch (error) {
		client.close();
		return res.status(500).json({
			message: 'Something went wrong when saving new jobs to database',
		});
	}

	client.close();
	return res.status(200).json({ message: 'Success' });
};

export default handler;
