import Image from 'next/image';

import styles from './logo.module.scss';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image
				src="/logo429x774.png"
				alt="xrdev-logo"
				width={75}
				height={45}
				layout="fixed"
			/>
			<span className={styles.textLogo}>XRDEV.com</span>
		</div>
	);
};

export default Logo;
