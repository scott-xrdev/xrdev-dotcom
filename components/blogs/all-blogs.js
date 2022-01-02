import BlogList from './blog-list';

import styles from './all-blogs.module.scss';

const AllBlogs = () => {
	return (
		<section className={styles.allBlogs}>
			<BlogList />
		</section>
	);
};

export default AllBlogs;
