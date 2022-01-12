import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './learn-section.module.scss';

const LearnSection = () => {
	return (
		<section className={styles.learn}>
			<h1>Learn XR Dev with Us</h1>
			<p>
				We're working hard to deliver fresh courses, tutorials, and other tools
				to the VR community but they're not quite finished yet. Check out our
				plans below and come back later to see some fresh updates.
			</p>
			<ul className={styles.links}>
				<li>
					<Link href="/learn/build-your-own-reusable-custom-xr-physics-framework">
						<a>
							Build Your Own Reusable Custom XR Physics Framework
							<span>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/learn/add-photon-pun2-multiplayer-to-your-vr-game">
						<a>
							Add Photon PUN2 Multiplayer to Your VR Game<span>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/learn/vr-game-code-along-series">
						<a>
							VR Game Code-Along Series<span>&gt;</span>
						</a>
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default LearnSection;
