import mongoose from 'mongoose';

const { Schema } = mongoose;

const TeamSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	admins: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	members: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Project',
		},
	],
	needs: [
		{
			type: String,
		},
	],
	image: {
		type: String,
	},
});

export default mongoose.models.Team || mongoose.model('Team', TeamSchema);
