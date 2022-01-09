import { Fragment } from 'react';
import Image from 'next/image';

import Avatar from './avatar';
import UserBio from './user-bio';
import styles from './user-profile-section.module.scss';
import ProfileContent from './profile-content';

const UserProfileSection = () => {
	return (
		<Fragment>
			<div className={styles.heading} />
			<section className={styles.userProfile}>
				<Avatar />
				<UserBio />
				<ProfileContent />
			</section>
		</Fragment>
	);
};

export default UserProfileSection;
