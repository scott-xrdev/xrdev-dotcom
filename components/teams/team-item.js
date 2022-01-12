import Image from 'next/image';
import Link from 'next/link';

import styles from './team-item.module.scss';

const TeamItem = ({ team }) => {
	return (
		<li className={styles.teamItem}>
			<Link href="/">
				<a className={styles.image}>
					<Image
						src={team.image}
						alt={team.name}
						width={150}
						height={150}
						layout="responsive"
					/>
				</a>
			</Link>
			<Link href="/">
				<a className={styles.name}>{team.name}</a>
			</Link>
			<p className={styles.members}>{team.members.length} member(s)</p>
			<p className={styles.description}>{team.description}</p>
			{team.projects.length > 0 && (
				<ul className={styles.projects}>
					{team.projects.map((project) => (
						<li key={project.id}>
							<Link href="/">
								<a>
									{project.title}
									<span>&gt;</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default TeamItem;
