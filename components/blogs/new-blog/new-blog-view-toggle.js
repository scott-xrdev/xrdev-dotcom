import styles from './new-blog-view-toggle.module.scss';

const NewBlogViewToggle = (props) => {
	return (
		<div className={styles.toggle}>
			<button onClick={props.handleClick}>Toggle Editor</button>
		</div>
	);
};

export default NewBlogViewToggle;
