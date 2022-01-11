import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
	content: {
		type: String,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	date: {
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

export default mongoose.models.Comment ||
	mongoose.model('Comment', CommentSchema);
