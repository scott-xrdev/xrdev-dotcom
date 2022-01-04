import { useRef } from 'react';
import styles from './change-password-form.module.scss';

const ChangePasswordForm = (props) => {
	const oldPasswordRef = useRef();
	const newPasswordRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredOldPassword = oldPasswordRef.current.value;
		const enteredNewPassword = newPasswordRef.current.value;

		// TODO add client side validation (validation already on server side)

		props.onChangePassword({
			oldPassword: enteredOldPassword,
			newPassword: enteredNewPassword,
		});
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.control}>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor="old-password">Old Password</label>
				<input type="password" id="old-password" ref={oldPasswordRef} />
			</div>
			<div className={styles.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ChangePasswordForm;