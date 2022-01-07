import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './github-signin.module.scss';

const GithubSignin = ({ isLogin, signIn, createUser }) => {
	const handleClick = () => {
		signIn('github');
	};

	return (
		<Fragment>
			<p className={styles.divider}>
				{isLogin ? 'sign in via' : 'sign up via'}
			</p>
			<div className={styles.container}>
				<button className={styles.github} onClick={handleClick}>
					<FontAwesomeIcon icon={faGithub} size="3x" />
				</button>
			</div>
		</Fragment>
	);
};

export default GithubSignin;
