import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
// import { signIn } from 'next-auth/client';

import styles from './auth-form.module.scss';

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(true);
	const router = useRouter();

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		console.log('submitHandler called on auth form');

		// const enteredEmail = emailInputRef.current.value;
		// const enteredPassword = passwordInputRef.current.value;

		// // TODO add client side validation (already have it on server)

		// if (isLogin) {
		// 	const result = await signIn('credentials', {
		// 		redirect: false,
		// 		email: enteredEmail,
		// 		password: enteredPassword,
		// 	});

		// 	// TODO add loading feedback while login is being verified

		// 	// TODO add error notification if failed

		// 	if (!result.error) {
		// 		router.replace('/profile');
		// 	}
		// } else {
		// 	try {
		// 		// TODO add spinner until user created response received

		// 		const result = await createUser(enteredEmail, enteredPassword);
		// 		console.log(result);

		// 		// automatically change to isLogin
		// 		setIsLogin(true);
		// 		passwordInputRef.current.value = '';

		// 		// TODO send a notification to log in with new credentials
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// }
	};

	return (
		<section className={styles.auth}>
			<form onSubmit={submitHandler}>
				<h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
				<input
					type="email"
					id="email"
					placeholder="Email Address"
					ref={emailInputRef}
					required
				/>
				<input
					type="password"
					id="password"
					placeholder="Password"
					ref={passwordInputRef}
					required
				/>
				<button>{isLogin ? 'Login' : 'Create Account'}</button>
				<button
					type="button"
					className={styles.toggle}
					onClick={switchAuthModeHandler}
				>
					{isLogin ? 'Create new account' : 'Login with existing account'}
				</button>
				{/* <div className={styles.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" ref={emailInputRef} required />
				</div> */}
				{/* <div className={styles.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						ref={passwordInputRef}
						required
					/>
				</div> */}
				{/* <div className={styles.actions}>
					<button>{isLogin ? 'Login' : 'Create Account'}</button>
					<button
						type="button"
						className={styles.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div> */}
			</form>
		</section>
	);
};

export default AuthForm;
