import { Fragment } from 'react';
import Head from 'next/head';

import BlogContent from '../../components/blogs/blog-content';

import { getBlogData, getBlogFiles } from '../../lib/blogs-util';

const BlogDetailPage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>{props.blog.title}</title>
				<meta name="description" content={props.blog.excerpt} />
			</Head>
			<BlogContent blog={props.blog} />
		</Fragment>
	);
};

export const getStaticProps = (context) => {
	const { params } = context;
	const { slug } = params;

	const blogData = getBlogData(slug);

	return {
		props: {
			blog: blogData,
		},
		// can revalidate here to get latest data if one of the markdown files are edited/updated
		// revalidate: 600
	};
};

export const getStaticPaths = () => {
	const blogFileNames = getBlogFiles();

	const slugs = blogFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

	const paths = slugs.map((slug) => ({ params: { slug: slug } }));

	return {
		paths,
		fallback: false,
	};
};

export default BlogDetailPage;
