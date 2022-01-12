import ProjectFilter from './project-filter';
import ProjectList from './project-list';
import styles from './projects-section.module.scss';
import DUMMY_PROJECTS from '../../DUMMY_PROJECTS';

const ProjectsSection = () => {
	return (
		<section className={styles.projects}>
			<ProjectFilter />
			<ProjectList projects={DUMMY_PROJECTS} />
		</section>
	);
};

export default ProjectsSection;
