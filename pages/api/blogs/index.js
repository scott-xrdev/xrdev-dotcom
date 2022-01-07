import { getSession } from 'next-auth/react';
import formidable from 'formidable';
import fs from 'fs';

import { createBlog, saveImage } from '../../../lib/blogs-util';

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const session = await getSession({ req: req });

		if (!session) {
			res.status(401).json({ message: 'Not authenticated.' });
			return;
		}

		const form = new formidable.IncomingForm();

		form.parse(req, async (err, fields, files) => {
			if (err) {
				return res.status(500).json({ message: 'Blog could not be added' });
			}

			const extension = '.' + files.file.mimetype.slice(6);
			const imageFileName = 'cover-image' + extension;

			const blogData = {
				content: fields.content,
				coverImageFileName: imageFileName,
				excerpt: fields.excerpt,
				title: fields.title,
				date: Date.now(),
				slug: fields.title.trim().replace(/\s+/g, '-').toLowerCase(),
			};

			const coverImage = files.file;
			console.log(coverImage);

			try {
				createBlog(blogData);
				await saveImage(coverImage, blogData.slug, imageFileName);
				res.status(201).json({ message: 'Successfully added blog' });
			} catch (error) {
				res.status(500).json({ message: 'Blog could not be added' });
			}
		});

		// const saveImageFile = async (file, slug) => {
		// 	const data = fs.readFileSync(file.path);
		// 	fs.writeFileSync(`./public/images/blogs/${slug}/${file.name}`, data);
		// 	await fs.unlinkSync(file.path);
		// 	return;
		// };

		// console.log(blog);

		// try {
		// 	createBlog(blog);
		// 	res.status(201).json({ message: 'Successfully added blog', blog: blog });
		// } catch (error) {
		// 	res.status(500).json({ message: 'Blog could not be added' });
		// }
	}
};

export default handler;
