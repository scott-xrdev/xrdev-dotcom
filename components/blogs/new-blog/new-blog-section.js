import { useState } from 'react';

import NewBlogViewToggle from './new-blog-view-toggle';
import BlogEditor from './blog-editor';
import styles from './new-blog-section.module.scss';
import BlogContent from '../blog-content';

const NewBlogSection = (props) => {
	const [editorEnabled, setEditorEnabled] = useState(true);

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
			<BlogContent blog={props.blog} />
		</section>
	);
};

export default NewBlogSection;
