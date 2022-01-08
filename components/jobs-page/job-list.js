import { useEffect } from 'react';

import JobItem from './job-item';
import styles from './job-list.module.scss';

import DUMMY_JOBS from '../../DUMMY_JOBS';

const JobList = ({ jobs }) => {
	useEffect(() => {
		console.log(jobs);
	}, [jobs]);

	return (
		<ul className={styles.jobList}>
			{jobs.map((job) => (
				<JobItem job={job} />
			))}
		</ul>
	);
};

export default JobList;
