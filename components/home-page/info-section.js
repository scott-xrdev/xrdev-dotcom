import styles from './info-section.module.scss';

const InfoSection = () => {
	return (
		<section className={styles.info}>
			<div>
				<h2>
					This site is still in development so please enjoy the content
					currently available and check back frequently for new updates
				</h2>
			</div>
		</section>
	);
};

export default InfoSection;
