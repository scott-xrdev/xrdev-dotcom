import mongoose from 'mongoose';
import { autopopulate as Populate } from '../lib/comments-util';

const { Schema } = mongoose;

const CommentSchema = new Schema({
	content: {
		type: String,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
	blog: {
		type: Schema.Types.ObjectId,
		ref: 'Blog',
	},
	replies: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
});

CommentSchema.pre('findOne', Populate('replies')).pre(
	'find',
	Populate('replies')
);
// CommentSchema.pre('findOne', Populate('author'))
// 	.pre('find', Populate('author'))
// 	.pre('findOne', Populate('replies'))
// 	.pre('find', Populate('replies'));

export default mongoose.models.Comment ||
	mongoose.model('Comment', CommentSchema);
