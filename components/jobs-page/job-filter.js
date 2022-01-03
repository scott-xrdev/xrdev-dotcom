import styles from './job-filter.module.scss';

const JobFilter = () => {
	return (
		<form className={styles.jobFilter}>
			<div className={styles.row1}>
				<input type="text" placeholder="Search Keywords" />
				<input type="text" placeholder="All Locations" />
				<div className={styles.selectGroup}>
					<select>
						<option>Job Title</option>
						<option>Animator</option>
						<option>Artist</option>
						<option>Game Designer</option>
						<option>Generalist</option>
						<option>Programmer</option>
						<option>Web Developer</option>
					</select>
				</div>
				<div className={styles.selectGroup}>
					<select>
						<option>Game Engine</option>
						<option>Unity</option>
						<option>Unreal Engine</option>
						<option>Other</option>
						<option>Any Game Engine</option>
					</select>
				</div>
				<button>Search Jobs</button>
			</div>
			<div className={styles.row2}>
				<ul className={styles.checkboxes}>
					<li>
						<input type="checkbox" />
						<label>Freelance</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Full-Time</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Part-Time</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Paid</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Rev-Share</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Remote</label>
					</li>
				</ul>
				<button>Clear Filters</button>
			</div>
		</form>
	);
};

export default JobFilter;
