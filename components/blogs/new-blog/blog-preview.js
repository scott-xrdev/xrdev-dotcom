import BlogContent from '../blog-content';
import styles from './blog-preview.module.scss';

const BlogPreview = () => {
	return <div className={styles.blogPreview}>{<BlogContent />}</div>;
};

export default BlogPreview;
