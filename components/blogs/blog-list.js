import BlogItem from './blog-item';

import styles from './blog-list.module.scss';

const BlogList = (props) => {
	return (
		<ul className={styles.blogList}>
			{props.blogs.map((blog) => (
				<BlogItem key={blog.slug} blog={blog} />
			))}
		</ul>
	);
};

export default BlogList;
