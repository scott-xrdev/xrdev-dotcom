import { getSession } from 'next-auth/client';

import { createBlog } from '../../../lib/blogs-util';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const session = await getSession({ req: req });

		if (!session) {
			res.status(401).json({ message: 'Not authenticated.' });
			return;
		}

		const blog = {
			content: req.body.content,
			excerpt: req.body.excerpt,
			title: req.body.title,
			date: Date.now(),
			slug: req.body.title.trim().replace(/\s+/g, '-').toLowerCase(),
		};

		console.log(blog);

		try {
			createBlog(blog);
			res.status(201).json({ message: 'Successfully added blog', blog: blog });
		} catch (error) {
			res.status(500).json({ message: 'Blog could not be added' });
		}
	}
};

export default handler;
