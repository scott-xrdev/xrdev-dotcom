import Link from 'next/link';

import styles from './create-blog-button.module.scss';

const CreateBlogButton = () => {
	return (
		<div className={styles.createBlogButton}>
			<Link href="/blogs/new-blog">
				<button>Create Blog</button>
			</Link>
		</div>
	);
};

export default CreateBlogButton;
