import { connectMongoose } from '../../../lib/db';
import Comment from '../../../models/Comment';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		await connectMongoose();

		let blog;
		try {
			blog = await Blog.findOne({ slug: req.query.slug });
			// blog = await Blog.findOne({ slug: req.query.slug }).populate('comments');
			// blog = await Blog.findOne({ slug: req.query.slug })
			// 	.populate('comments')
			// 	.populate('comments.replies')
			// 	.populate('comments.replies.replies');
		} catch (error) {
			return res.status(404).json({ message: 'Not found' });
		}

		if (blog.comments) {
			console.log(blog.comments);
		}
		return res
			.status(200)
			.json({ message: 'success', comments: blog.comments });
	}
};

export default handler;
