import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProjectSchema = new Schema({
	admins: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	team: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team',
		},
	],
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	updates: [
		{
			timestamp: {
				type: Date,
			},
			content: {
				type: String,
			},
		},
	],
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

export default mongoose.models.Project ||
	mongoose.model('Project', ProjectSchema);
