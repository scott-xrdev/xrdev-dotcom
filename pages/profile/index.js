import { Fragment } from 'react';
import Head from 'next/head';

import { getSession } from 'next-auth/react';
import UserProfile from '../../components/profile-page/user-profile';

const ProfilePage = () => {
	return (
		<Fragment>
			<Head>
				<title>Profile</title>
				<meta name="description" content="Your XRDEV.com profile page" />
			</Head>
			<UserProfile />
		</Fragment>
	);
};

export const getServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
};

export default ProfilePage;
