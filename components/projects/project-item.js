import Link from 'next/link';
import Image from 'next/image';

import styles from './project-item.module.scss';

const ProjectItem = ({ project }) => {
	return (
		<li className={styles.projectItem}>
			<Link href="/">
				<a className={styles.image}>
					<Image
						src={project.image}
						alt={project.title}
						width={300}
						height={200}
						// layout="responsive"
					/>
				</a>
			</Link>
			<Link href="/">
				<a className={styles.title}>{project.title}</a>
			</Link>
			<Link href="/">
				<a className={styles.team}>
					{project.team.name}
					<span>&gt;</span>
				</a>
			</Link>
			<p className={styles.description}>{project.description}</p>
		</li>
	);
};

export default ProjectItem;
