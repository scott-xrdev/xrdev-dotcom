import JobItem from './job-item';
import styles from './job-list.module.scss';

import DUMMY_JOBS from '../../DUMMY_JOBS';

const JobList = () => {
	return (
		<ul className={styles.jobList}>
			{DUMMY_JOBS.map((job) => (
				<JobItem job={job} />
			))}
		</ul>
	);
};

export default JobList;
