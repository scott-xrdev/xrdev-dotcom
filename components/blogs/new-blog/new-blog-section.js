import NewBlogViewToggle from './new-blog-view-toggle';
import BlogEditor from './blog-editor';
import BlogPreview from './blog-preview';
import styles from './new-blog-section.module.scss';

const NewBlogSection = () => {
	return (
		<section className={styles.newBlog}>
			<NewBlogViewToggle />
			<BlogEditor />
			<BlogPreview />
		</section>
	);
};

export default NewBlogSection;
