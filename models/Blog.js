import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogSchema = new Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
	},
	date: {
		type: Date,
	},
	image: {
		type: String,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	content: {
		type: String,
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
	isFeatured: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
