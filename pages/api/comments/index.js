import { getSession } from 'next-auth/react';
import { connectMongoose } from '../../../lib/db';
import User from '../../../models/User';
import Comment from '../../../models/Comment';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
	const body = JSON.parse(req.body);

	if (req.method === 'POST') {
		const session = await getSession({ req: req });

		if (!session) {
			return res.status(401).json({ message: 'Not authenticated.' });
		}

		await connectMongoose();

		let user;
		let blog;
		let parent;
		try {
			user = await User.findOne({ email: session.user.email });
			blog = await Blog.findOne({ slug: body.slug });

			if (body.parentId) {
				console.log('parentId: ', body.parentId);
				parent = await Comment.findById(body.parentId);
				console.log('parent: ', parent);
			}
		} catch (error) {
			return res.status(500).json({ message: 'Not found' });
		}

		let comment;
		try {
			comment = new Comment({
				author: user._id,
				blog: blog._id,
				content: body.content,
			});
			user.comments.push(comment);

			if (parent) {
				parent.replies.push(comment);
				await parent.save();
			} else {
				blog.comments.push(comment);
				await blog.save();
			}

			await comment.save();
			await user.save();
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Something went wrong when creating comment' });
		}

		return res.status(200).json({ message: 'success', comment: comment });
	}
};

export default handler;
