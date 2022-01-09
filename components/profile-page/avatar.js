import Image from 'next/image';

import styles from './avatar.module.scss';

const Avatar = () => {
	return (
		<div className={styles.avatar}>
			<Image
				src="/images/site/Scott.JPG"
				alt="placeholder alt"
				width={150}
				height={150}
				// layout="fill"
			/>
		</div>
	);
};

export default Avatar;
