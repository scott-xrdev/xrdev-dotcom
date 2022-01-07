import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './github-signin.module.scss';

const GithubSignin = ({ isLogin, signIn }) => {
	const handleGithubClick = () => {
		signIn('github');
	};

	const handleDiscordClick = () => {
		signIn('discord', { callbackUrl: 'http://localhost:3000' });
	};

	const handleGoogleClick = () => {
		signIn('google', { redirect: false });
	};

	return (
		<Fragment>
			<p className={styles.divider}>
				{isLogin ? 'sign in via' : 'sign up via'}
			</p>
			<div className={styles.container}>
				<button className={styles.github} onClick={handleGithubClick}>
					<FontAwesomeIcon icon={faGithub} size="3x" />
				</button>
				<button className={styles.discord} onClick={handleDiscordClick}>
					<FontAwesomeIcon icon={faDiscord} size="3x" />
				</button>
				<button className={styles.google} onClick={handleGoogleClick}>
					<FontAwesomeIcon icon={faGoogle} size="3x" />
				</button>
			</div>
		</Fragment>
	);
};

export default GithubSignin;
