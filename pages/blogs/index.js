import { Fragment } from 'react';
import Head from 'next/head';

import AllBlogs from '../../components/blogs/all-blogs';

import { getAllBlogs } from '../../lib/blogs-util';

const AllBlogsPage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta name="description" content="A list of all xrdev blog posts" />
			</Head>
			{/* <AllBlogs /> */}
			<AllBlogs blogs={props.blogs} />
		</Fragment>
	);
};

export const getStaticProps = () => {
	const allBlogs = getAllBlogs();

	return {
		props: {
			blogs: allBlogs,
		},
		// Consider adding revalidate after adding user generated content
	};
};

export default AllBlogsPage;
