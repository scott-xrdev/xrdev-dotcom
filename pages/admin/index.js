import { getSession } from 'next-auth/react';

import AdminSection from '../../components/admin-page/admin-section';
import { isAdmin } from '../../lib/auth';

const AdminPage = () => {
	return <AdminSection />;
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

	const isAdmin = session.isAdmin;

	if (!isAdmin) {
		return {
			redirect: {
				destination: '/profile',
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
};

export default AdminPage;
