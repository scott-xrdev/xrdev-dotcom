import { createContext, useState } from 'react';

const BlogEditorContext = createContext({
	title: '',
	excerpt: '',
	markdownText: '',
	titleImage: '',
	setTitle: () => {},
	setExcerpt: () => {},
	setMarkdownText: () => {},
	setCoverImage: () => {},
});

export const BlogEditorContextProvider = (props) => {
	const [title, setTitle] = useState('');
	const [excerpt, setExcerpt] = useState('');
	const [markdownText, setMarkdownText] = useState('');
	const [coverImage, setCoverImage] = useState('');

	const context = {
		title: title,
		excerpt: excerpt,
		markdownText: markdownText,
		coverImage: coverImage,
		setTitle: setTitle,
		setExcerpt: setExcerpt,
		setMarkdownText: setMarkdownText,
		setCoverImage: setCoverImage,
	};

	return (
		<BlogEditorContext.Provider value={context}>
			{props.children}
		</BlogEditorContext.Provider>
	);
};

export default BlogEditorContext;
