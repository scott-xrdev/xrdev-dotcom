import Image from 'next/image';
import Link from 'next/link';

import styles from './dev-item.module.scss';

const DevItem = ({ dev }) => {
	return (
		<li className={styles.devItem}>
			<Link href={`/devs/${dev.username}`}>
				<a>
					<div className={styles.image}>
						<Image
							src={dev.avatarUrl}
							alt={dev.username}
							width={100}
							height={100}
							layout="responsive"
						/>
					</div>
					<p>{dev.username}</p>
				</a>
			</Link>
		</li>
	);
};

export default DevItem;
