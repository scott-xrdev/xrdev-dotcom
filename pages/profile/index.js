import { getSession } from 'next-auth/client';

const ProfilePage = () => {
	return <div>ProfilePage</div>;
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
