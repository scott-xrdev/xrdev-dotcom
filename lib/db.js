import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.4rrkb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(connectionString);

	return client;
};

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

export const connectMongoose = async () => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose
			.connect(connectionString, opts)
			.then((mongoose) => {
				return mongoose;
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
};
