import DUMMY_DEVS from '../../DUMMY_DEVS';
import DevsList from './devs-list';

import styles from './devs-section.module.scss';

const DevsSection = () => {
	return (
		<section className={styles.devs}>
			<h1>Make a Connection</h1>
			<DevsList devs={DUMMY_DEVS} />
		</section>
	);
};

export default DevsSection;
