import BlogList from './blog-list';

import styles from './all-blogs.module.scss';

const AllBlogs = (props) => {
	return (
		<section className={styles.allBlogs}>
			<BlogList blogs={props.blogs} />
		</section>
	);
};

export default AllBlogs;
