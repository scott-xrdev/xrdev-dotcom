import styles from './devs-filter.module.scss';

const DevsFilter = () => {
	return (
		<form className={styles.devsFilter}>
			<div className={styles.row1}>
				<input type="text" placeholder="Search Keywords" />
				<input type="text" placeholder="All Locations" />
				<div className={styles.selectGroup}>
					<select>
						<option>Specialization</option>
						<option>Any</option>
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
				<button>Search Devs</button>
			</div>
			<div className={styles.row2}>
				<ul className={styles.checkboxes}>
					<li>
						<input type="checkbox" />
						<label>Available</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Published</label>
					</li>
				</ul>
				<button>Clear Filters</button>
			</div>
		</form>
	);
};

export default DevsFilter;
