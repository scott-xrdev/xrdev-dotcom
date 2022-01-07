import { Fragment, useEffect } from 'react';

import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './github-signin.module.scss';

const GithubSignin = ({ isLogin, signIn }) => {
	const router = useRouter();

	const handleSignIn = (provider) => {
		signIn(provider);
	};

	useEffect(() => {
		console.log(router.query);
		// TODO: if detect "OAuthAccountNotLinked" error in query, show notification that you must
		// log in with the original method for each account linked to an individual email address
	}, [router]);

	return (
		<Fragment>
			<p className={styles.divider}>
				{isLogin ? 'sign in via' : 'sign up via'}
			</p>
			<div className={styles.container}>
				<button
					className={styles.github}
					onClick={() => handleSignIn('github')}
				>
					<FontAwesomeIcon icon={faGithub} size="3x" />
				</button>
				<button
					className={styles.discord}
					onClick={() => handleSignIn('discord')}
				>
					<FontAwesomeIcon icon={faDiscord} size="3x" />
				</button>
				<button
					className={styles.google}
					onClick={() => handleSignIn('google')}
				>
					<FontAwesomeIcon icon={faGoogle} size="3x" />
				</button>
			</div>
		</Fragment>
	);
};

export default GithubSignin;
