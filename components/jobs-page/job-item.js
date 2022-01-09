import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './job-item.module.scss';

const JobItem = ({ job }) => {
	const formattedDate = job.date_posted
		? new Date(job.date_posted).toLocaleDateString('en-US', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
		  })
		: null;

	return (
		<li
			className={
				(job.featured && `${styles.jobItem} ${styles.featured}`) ||
				styles.jobItem
			}
		>
			<div className={styles.jobInfo}>
				<a href={job.detail_url} target="_blank">
					<div className={styles.jobTitle}>{job.title}</div>
				</a>
				{job.company_name && <p>Company: {job.company_name}</p>}
				<p>Posted: {formattedDate ? formattedDate : 'N/A'}</p>
				<p>{job.city ? job.city : 'Remote'}</p>
				<p>{job.country}</p>
			</div>
			<a href={job.detail_url} target="_blank" className={styles.linkIconBox}>
				<FontAwesomeIcon icon={faExternalLinkAlt} />
				<span>{job.source}</span>
			</a>
			<p className={styles.description}>{job.description}</p>
		</li>
	);
};

export default JobItem;
