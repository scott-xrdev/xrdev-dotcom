import mongoose from 'mongoose';
import { autopopulate as Populate } from '../lib/comments-util';

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

BlogSchema.pre('findOne', Populate('comments')).pre(
	'find',
	Populate('comments')
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
