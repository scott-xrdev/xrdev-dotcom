import { useState, useContext, useEffect } from 'react';

import BlogEditorContext from '../../../store/blog-editor-context';
import NewBlogViewToggle from './new-blog-view-toggle';
import BlogEditor from './blog-editor';
import styles from './new-blog-section.module.scss';
import BlogContent from '../blog-content';
import BlogPreview from './blog-preview';

const NewBlogSection = (props) => {
	const { title, excerpt, markdownText, coverImage } =
		useContext(BlogEditorContext);

	const [blog, setBlog] = useState(null);

	const [editorEnabled, setEditorEnabled] = useState(true);

	useEffect(() => {
		setBlog({
			date: 0,
			title: title,
			slug: title.trim().replace(/\s+/g, '-').toLowerCase(),
			excerpt: excerpt,
			markdownText: markdownText,
			coverImage: coverImage ? URL.createObjectURL(coverImage) : '',
		});
	}, [title, excerpt, markdownText, coverImage]);

	const toggleEditorEnabled = () => {
		setEditorEnabled(!editorEnabled);
	};

	// must keep state for editor at a higher level... probably need context

	return (
		<section
			className={`${styles.newBlog} ${!editorEnabled && styles.singleColumn}`}
		>
			<NewBlogViewToggle handleClick={toggleEditorEnabled} />
			{editorEnabled && <BlogEditor />}
			{/* <BlogContent blog={props.blog} /> */}
			{/* {blog && <BlogContent blog={blog} />} */}
			<BlogPreview />
		</section>
	);
};

export default NewBlogSection;
