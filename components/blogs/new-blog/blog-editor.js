import styles from './blog-editor.module.scss';

const BlogEditor = () => {
	return (
		<form className={styles.blogEditor}>
			<h2>Editor</h2>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" required />
				</div>
				<div className={styles.control}>
					<label htmlFor="coverImage">Cover Image</label>
					<input type="file" accept="image/*" id="coverImage" />
				</div>
				<div className={styles.control}>
					<label htmlFor="excerpt">
						Excerpt (This appears on the thumbnail)
					</label>
					<textarea type="text" id="excerpt" rows="2" required></textarea>
				</div>
				<div className={styles.control}>
					<label htmlFor="markdown">Markdown Blog Content</label>
					<textarea id="markdown" rows="10"></textarea>
				</div>
				<button className={styles.submitButton}>Submit Blog</button>
			</div>
		</form>
	);
};

export default BlogEditor;
