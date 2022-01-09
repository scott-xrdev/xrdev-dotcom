import styles from './profile-content.module.scss';

const ProfileContent = () => {
	return (
		<div className={styles.content}>
			<div className={styles.pinned}>
				<h2>Pinned</h2>
				<ul>
					<li>Pinned Blog</li>
					<li>Pinned Blog</li>
					<li>Pinned Blog</li>
				</ul>
			</div>
			<div className={styles.blogs}>
				<h2>Blogs (7)</h2>
				<ul>
					<li>How to do something</li>
					<li>How to do something</li>
					<li>How to do something</li>
					<li>see more...</li>
				</ul>
			</div>
			<div className={styles.teams}>
				<h2>Teams</h2>
				<ul>
					<li>Team 1</li>
					<li>Team 2</li>
				</ul>
			</div>
			<div className={styles.projects}>
				<h2>Projects</h2>
				<ul>
					<li>Project 1</li>
					<li>Project 2</li>
					<li>Project 3</li>
				</ul>
			</div>
			<div className={styles.replies}>
				<h2>Discussions (24)</h2>
				<ul>
					<li>Comment on a blog post...</li>
					<li>Comment on a blog post...</li>
					<li>Comment on a blog post...</li>
					<li>see more...</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileContent;
