import Image from 'next/image';

import styles from './job-item.module.scss';

const JobItem = ({ job }) => {
	return (
		<li
			className={
				(job.featured && `${styles.jobItem} ${styles.featured}`) ||
				styles.jobItem
			}
		>
			<div className={styles.image}>
				<Image
					src="/images/blogs/getting-started-with-vr-in-unity1/getting-started-vr.png"
					alt={'image alt placeholder'}
					width={200}
					height={150}
					layout="responsive"
				/>
			</div>
			<div className={styles.jobInfo}>
				{job.hours === 'full' && (
					<div className={`${styles.jobType} ${styles.fullTime}`}>
						Full-Time
					</div>
				)}
				{job.hours === 'part' && (
					<div className={`${styles.jobType} ${styles.partTime}`}>
						Part-Time
					</div>
				)}
				{job.hours === 'freelance' && (
					<div className={`${styles.jobType} ${styles.freelance}`}>
						Freelance
					</div>
				)}
				<h3>{job.title}</h3>
				<span>{job.company}</span>
				<time>Date: {job.date}</time>
			</div>
			<div className={styles.location}>
				<p>{job.city}</p>
				<span>{job.country}</span>
			</div>
			<div className={styles.rightColumn}>
				<h4>{job.pay}</h4>
				<button>See Details</button>
				{job.featured && <div>Featured Listing</div>}
			</div>
		</li>
	);
};

export default JobItem;
