import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				const client = await connectToDatabase();

				const usersCollection = client.db().collection('users');

				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				if (!user) {
					client.close();
					throw new Error('User not found');
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					client.close();
					throw new Error('Login failed');
				}

				client.close();

				return { email: user.email };
			},
		}),
	],
});
