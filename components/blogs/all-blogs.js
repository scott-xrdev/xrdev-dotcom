import { Fragment } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import BlogList from './blog-list';

import styles from './all-blogs.module.scss';
import CreateBlogButton from './create-blog-button';

const AllBlogs = (props) => {
	const [session, loading] = useSession();

	return (
		<Fragment>
			{/* {session && (
				<Link href="/blogs/new-blog">
					<a className={styles.createBlogButton}>Create Blog</a>
				</Link>
			)} */}
			<section className={styles.allBlogs}>
				{session && (
					// <Link href="/blogs/new-blog">
					// 	<button className={styles.createBlogButton}>Create Blog</button>
					// </Link>
					<CreateBlogButton />
				)}
				<BlogList blogs={props.blogs} />
			</section>
		</Fragment>
	);
};

export default AllBlogs;
