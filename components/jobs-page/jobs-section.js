import JobFilter from './job-filter';
import JobList from './job-list';
import styles from './jobs-section.module.scss';

const JobsSection = () => {
	return (
		<section className={styles.jobs}>
			<JobFilter />
			<JobList />
		</section>
	);
};

export default JobsSection;
