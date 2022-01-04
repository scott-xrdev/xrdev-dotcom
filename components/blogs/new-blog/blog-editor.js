import { useContext, useEffect } from 'react';

import BlogEditorContext from '../../../store/blog-editor-context';
import { submitNewBlog } from '../../../lib/new-blog-util';

import styles from './blog-editor.module.scss';

const BlogEditor = () => {
	const {
		title,
		markdownText,
		excerpt,
		setTitle,
		setExcerpt,
		setMarkdownText,
		setCoverImage,
	} = useContext(BlogEditorContext);

	useEffect(() => {
		document.getElementById('title').value = title;
		document.getElementById('excerpt').value = excerpt;
		document.getElementById('markdown').value = markdownText;
	}, []);

	const onTitleInputChange = (event) => {
		const text = event.currentTarget.value;
		setTitle(text);
	};
	const onCoverImageInputChange = (event) => {
		const image = event.target.files[0];
		setCoverImage(image);
	};
	const onExcerptInputChange = (event) => {
		const text = event.currentTarget.value;
		setExcerpt(text);
	};
	const onMarkdownInputChange = (event) => {
		const text = event.currentTarget.value;
		setMarkdownText(text);
	};

	const submitBlogHandler = async (event) => {
		event.preventDefault();

		const blogDetails = {
			title: title,
			content: markdownText,
			excerpt: excerpt,
		};

		let data;
		try {
			data = await submitNewBlog(blogDetails);
		} catch (error) {}

		// TODO show notifications

		// TODO clear blog context values on success and redirect to blog details page
	};

	return (
		<form className={styles.blogEditor} onSubmit={submitBlogHandler}>
			<h2>Editor</h2>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						onChange={onTitleInputChange}
						required
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor="coverImage">Cover Image</label>
					<input
						type="file"
						accept="image/*"
						id="coverImage"
						onChange={onCoverImageInputChange}
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor="excerpt">
						Excerpt (This appears on the thumbnail)
					</label>
					<textarea
						type="text"
						id="excerpt"
						rows="2"
						onChange={onExcerptInputChange}
						required
					></textarea>
				</div>
				<div className={styles.control}>
					<label htmlFor="markdown">Markdown Blog Content</label>
					<textarea
						id="markdown"
						rows="10"
						onChange={onMarkdownInputChange}
					></textarea>
				</div>
				<button className={styles.submitButton}>Submit Blog</button>
			</div>
		</form>
	);
};

export default BlogEditor;
