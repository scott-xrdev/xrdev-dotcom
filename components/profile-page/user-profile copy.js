import ChangePasswordForm from './change-password-form';
import styles from './user-profile.module.scss';

const UserProfile = () => {
	const changePasswordHandler = async (passwordData) => {
		const response = await fetch('/api/user/change-password', {
			method: 'PATCH',
			body: JSON.stringify(passwordData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);

		// TODO show feedback notification

		// TODO clear password inputs or redirect or something
	};

	return (
		<section className={styles.profile}>
			<h1>Your User Profile</h1>
			<ChangePasswordForm onChangePassword={changePasswordHandler} />
		</section>
	);
};

export default UserProfile;
