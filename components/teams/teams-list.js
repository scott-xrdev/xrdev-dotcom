import TeamItem from './team-item';
import styles from './teams-list.module.scss';

const TeamsList = ({ teams }) => {
	return (
		<ul className={styles.teamsList}>
			{teams.map((team) => (
				<TeamItem team={team} />
			))}
		</ul>
	);
};

export default TeamsList;
