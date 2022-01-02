import BlogItem from './blog-item';

import styles from './blog-list.module.scss';

const BlogList = () => {
	return (
		<ul className={styles.blogList}>
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
		</ul>
	);
};

export default BlogList;
