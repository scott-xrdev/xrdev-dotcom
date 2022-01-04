import { useContext, useEffect, useState } from 'react';

import BlogEditorContext from '../../../store/blog-editor-context';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';

import styles from './blog-preview.module.scss';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('cpp', cpp);

const BlogPreview = (props) => {
	const { title, excerpt, markdownText, coverImage } =
		useContext(BlogEditorContext);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		if (coverImage) {
			setImageUrl(URL.createObjectURL(coverImage));
		}

		if (!coverImage) {
			setImageUrl('');
		}
	}, [coverImage]);

	// const { blog } = props;

	// const imagePath = `/images/blogs/${blog.slug}/${blog.image}`;

	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={styles.image}>
						<Image
							src={`${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className && className.split('-')[1];

			return (
				<SyntaxHighlighter
					style={atomDark}
					// language={className}
					language={language}
					children={children}
				/>
			);
		},
	};

	return (
		<article className={styles.blogContent}>
			<header className={styles.blogHeader}>
				<h1>{title}</h1>
				<div className={styles.coverImage}>
					<Image
						src={imageUrl || '/images/logo429x774.png'}
						alt={title}
						width={300}
						height={200}
						layout="responsive"
					/>
				</div>
			</header>
			<div className={styles.markdown}>
				<ReactMarkdown components={customRenderers}>
					{markdownText}
				</ReactMarkdown>
			</div>
		</article>
	);
};

export default BlogPreview;
