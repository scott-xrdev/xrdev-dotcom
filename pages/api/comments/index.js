import { getSession } from 'next-auth/react';
import { connectMongoose } from '../../../lib/db';
import User from '../../../models/User';
import Comment from '../../../models/Comment';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
	const body = JSON.parse(req.body);
	console.log(body.slug);

	if (req.method === 'POST') {
		const session = await getSession({ req: req });

		if (!session) {
			res.status(401).json({ message: 'Not authenticated.' });
			return;
		}

		await connectMongoose();

		let user;
		let blog;
		try {
			user = await User.findOne({ email: session.user.email });
			blog = await Blog.findOne({ slug: body.slug });
			console.log(blog.slug);
		} catch (error) {
			res.status(500).json({ message: 'Not found' });
		}

		let comment;
		try {
			comment = new Comment({
				author: user._id,
				blog: blog._id,
				content: body.content,
			});
			user.comments.push(comment);
			blog.comments.push(comment);
			await comment.save();
			await user.save();
			await blog.save();
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Something went wrong when creating comment' });
		}

		res.status(200).json({ message: 'success', comment: comment });
	}
};

export default handler;
