import Link from 'next/link';
import Image from 'next/image';

import styles from './blog-item.module.scss';

const BlogItem = () => {
	return (
		<li className={styles.blogItem}>
			<Link href="/blogs/getting-started-with-vr-in-unity1">
				<a>
					<div className={styles.image}>
						<Image
							src="/images/blogs/getting-started-with-vr-in-unity1/getting-started-vr.png"
							alt={'image alt placeholder'}
							width={900}
							height={500}
							layout="responsive"
						/>
					</div>
					<div className={styles.content}>
						<h3>Title</h3>
						<time>20 December, 2021</time>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default BlogItem;
