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
				</ul>
			</div>
			<div className={styles.links}>
				<ul>
					<li>About</li>
					<li>Contact</li>
					<li>Sitemap</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
