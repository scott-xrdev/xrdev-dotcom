import DevItem from './dev-item';
import styles from './devs-list.module.scss';

const DevsList = ({ devs }) => {
	return (
		<ul className={styles.devsList}>
			{devs.map((dev) => (
				<DevItem key={dev.userId} dev={dev} />
			))}
		</ul>
	);
};

export default DevsList;
