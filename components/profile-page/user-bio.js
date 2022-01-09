import styles from './user-bio.module.scss';

const UserBio = () => {
	return (
		<div className={styles.bio}>
			<h3>username</h3>
			<p>
				short blurb or bio that the user wants to be displayed on thier profile
			</p>
		</div>
	);
};

export default UserBio;
