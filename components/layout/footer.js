import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faYoutube,
	faInstagram,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<ul>
					<li>
						<Link href="https://github.com">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</Link>
					</li>
					<li>
						<Link href="https://twitter.com">
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</Link>
					</li>
					<li>
						<Link href="https://youtube.com">
							<FontAwesomeIcon icon={faYoutube} size="2x" />
						</Link>
					</li>
					<li>
						<Link href="https://instagram.com">
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</Link>
					</li>
					<li>
						<Link href="https://discord.com">
							<FontAwesomeIcon icon={faDiscord} size="2x" />
						</Link>
					</li>
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
