import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<ul>
					<li>Github</li>
					<li>Twitter</li>
					<li>Youtube</li>
					<li>Instagram</li>
					<li>Discord</li>
				</ul>
			</div>
			<div className={styles.links}>
				<ul>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>Sitemap</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
