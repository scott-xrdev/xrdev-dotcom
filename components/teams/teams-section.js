import TeamsList from './teams-list';
import styles from './teams-section.module.scss';
import DUMMY_TEAMS from '../../DUMMY_TEAMS';
import TeamFilter from './team-filter';

const TeamsSection = () => {
	return (
		<section className={styles.teams}>
			<TeamFilter />
			<TeamsList teams={DUMMY_TEAMS} />
		</section>
	);
};

export default TeamsSection;
