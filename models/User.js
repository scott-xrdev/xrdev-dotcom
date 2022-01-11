import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		default: () => `User${mongoose.Types.ObjectId()}`,
	},
	password: {
		type: String,
	},
	image: {
		type: String,
	},
	bio: {
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	emailVerified: {
		type: Boolean,
	},
	blogs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Blog',
		},
	],
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	following: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	requests: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	sentRequests: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
