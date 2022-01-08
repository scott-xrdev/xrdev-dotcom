import { useState, useEffect } from 'react';
import { fetchJobs } from '../../lib/jobs-util';

import JobFilter from './job-filter';
import JobList from './job-list';
import styles from './jobs-section.module.scss';

const JobsSection = () => {
	const [filter, setFilter] = useState(null);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		if (filter != null) {
			return;
		}

		fetchJobs().then((data) => {
			console.log(data);
			setJobs(data.jobs);
		});
	}, [filter]);

	return (
		<section className={styles.jobs}>
			<JobFilter setFilter={setFilter} />
			{jobs.length > 0 ? <JobList jobs={jobs} /> : <p>Loading...</p>}
		</section>
	);
};

export default JobsSection;
