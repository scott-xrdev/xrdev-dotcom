import Link from 'next/link';
import Image from 'next/image';

import styles from './blog-item.module.scss';

const BlogItem = (props) => {
	const { title, image, excerpt, date, slug } = props.blog;

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		timeZone: 'UTC',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/blogs/${slug}/${image}`;
	const linkPath = `/blogs/${slug}`;

	return (
		<li className={styles.blogItem}>
			<Link href={linkPath}>
				<a>
					<div className={styles.image}>
						<Image
							src={imagePath}
							alt={title}
							width={900}
							height={500}
							layout="responsive"
						/>
					</div>
					<div className={styles.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default BlogItem;
