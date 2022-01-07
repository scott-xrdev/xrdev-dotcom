import { updateJobs } from '../../lib/jobs-util';
import styles from './admin-section.module.scss';

const AdminSection = () => {
	return (
		<section className={styles.admin}>
			<div className={styles.controlPanel}>
				<button onClick={updateJobs}>Fetch Jobs</button>
			</div>
		</section>
	);
};

export default AdminSection;
