import { connectToDatabase } from '../../../lib/db';

const handler = async (req, res) => {
	if (req.method !== 'GET') return;

	const client = await connectToDatabase();
	const jobsCollection = client.db().collection('jobs');

	let jobs;
	try {
		jobs = await jobsCollection.find({}).toArray();
	} catch (error) {
		client.close();
		return res.status(500).json({
			message: 'Something went wrong while fetching jobs from database',
		});
	}

	client.close();
	return res.status(200).json({ message: 'success', jobs: jobs });
};

export default handler;
