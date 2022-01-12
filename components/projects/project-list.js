import ProjectItem from './project-item';
import styles from './project-list.module.scss';

const ProjectList = ({ projects }) => {
	return (
		<ul className={styles.projectList}>
			{projects.map((project) => (
				<ProjectItem project={project} />
			))}
		</ul>
	);
};

export default ProjectList;
