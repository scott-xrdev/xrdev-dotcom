import Link from 'next/link';

import styles from './hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1>
				A community for xr devs of all experience levels to learn, share, and
				collaborate
			</h1>
			<div className={styles.linkBox}>
				<Link href="/">
					<a>
						Join us and share something<span>&gt;</span>
					</a>
				</Link>
				<Link href="/">
					<a>
						Browse the dev blogs<span>&gt;</span>
					</a>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
