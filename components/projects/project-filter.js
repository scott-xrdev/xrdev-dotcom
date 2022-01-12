import styles from './project-filter.module.scss';

const ProjectFilter = () => {
	return (
		<form className={styles.projectFilter}>
			<div className={styles.row1}>
				<input type="text" placeholder="Search By Name" />
				<select>
					<option>Product Type</option>
					<option>Games</option>
					<option>Apps</option>
					<option>Other</option>
				</select>
				<select>
					<option>Game Engine</option>
					<option>Unity</option>
					<option>Unreal Engine</option>
					<option>Other</option>
				</select>
				<select>
					<option>Needs</option>
					<option>Programmer</option>
					<option>Artist</option>
					<option>Designer</option>
				</select>
				<button>Search</button>
			</div>
			<div className={styles.row2}>
				<ul className={styles.checkboxes}>
					<li>
						<input type="checkbox" />
						<label>Published</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Completed</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Active Development</label>
					</li>
					<li>
						<input type="checkbox" />
						<label>Needs Help</label>
					</li>
				</ul>
				<button>Clear Filters</button>
			</div>
		</form>
	);
};

export default ProjectFilter;
