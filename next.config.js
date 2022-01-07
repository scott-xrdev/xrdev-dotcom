const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: process.env.MONGODB_USERNAME_DEV,
				mongodb_password: process.env.MONGODB_PASSWORD_DEV,
				mongodb_cluster: process.env.MONGODB_CLUSTER_DEV,
				mongodb_database: process.env.MONGODB_DATABASE_DEV,
			},
		};
	}

	return {
		env: {
			mongodb_username: process.env.MONGODB_USERNAME_PROD,
			mongodb_password: process.env.MONGODB_PASSWORD_PROD,
			mongodb_cluster: process.env.MONGODB_CLUSTER_PROD,
			mongodb_database: process.env.MONGODB_DATABASE_PROD,
		},
	};
};
