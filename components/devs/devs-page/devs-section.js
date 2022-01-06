import DUMMY_DEVS from '../../../DUMMY_DEVS';
import DevsFilter from './devs-filter';
import DevsList from './devs-list';

import styles from './devs-section.module.scss';

const DevsSection = () => {
	return (
		<section className={styles.devs}>
			<h1>Make a Connection</h1>
			<DevsFilter />
			<DevsList devs={DUMMY_DEVS} />
		</section>
	);
};

export default DevsSection;
