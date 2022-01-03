import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');

export const getBlogFiles = () => {
	return fs.readdirSync(blogsDirectory);
};

// can take either fileName or slug as parameter
export const getBlogData = (blogIdentifier) => {
	const blogSlug = blogIdentifier.replace(/\.md$/, ''); // removes the file extension
	const filePath = path.join(blogsDirectory, `${blogSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const blogData = {
		slug: blogSlug,
		...data,
		content,
	};

	return blogData;
};

export const getAllBlogs = () => {
	const blogFiles = getBlogFiles();

	const allBlogs = blogFiles.map((blogFile) => {
		return getBlogData(blogFile);
	});

	const sortedBlogs = allBlogs.sort((blogA, blogB) =>
		blogA.date > blogB.date ? -1 : 1
	);

	return sortedBlogs;
};

export const getLatestBlogs = (startIndex, numberOfBlogs = null) => {
	const allBlogs = getAllBlogs();
	let endIndex;

	// if we want to return all blogs from startIndex to the end of the allBlogs array...
	endIndex = allBlogs.length - 1;

	if (allBlogs.length > numberOfBlogs > 0) {
		// if we just want to return a specific number of blogs and there are more blogs in the allBlogs array than the number of blogs being requested
		endIndex = startIndex + numberOfBlogs;
	}

	let latestBlogs = [];
	for (let i = startIndex; i <= endIndex; i++) {
		latestBlogs.push(allBlogs[i]);
	}

	return latestBlogs;
};

export const getFeaturedBlogs = () => {
	const allBlogs = getAllBlogs();

	const featuredBlogs = allBlogs.filter((blog) => blog.isFeatured);

	return featuredBlogs;
};

export const createBlog = (blog) => {
	const { title, content, excerpt, date, slug } = blog;

	const fileContent = `---
title: ${title}
excerpt: ${excerpt}
image: mastering-js-thumb.png
isFeatured: false
date: '${new Date(date)}'
---

${content}`;

	const filePath = path.join(blogsDirectory, slug + '.md');

	const newFile = fs.writeFileSync(filePath, fileContent);
};
