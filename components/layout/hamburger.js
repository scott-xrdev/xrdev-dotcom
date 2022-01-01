import { useEffect } from 'react';

import styles from './hamburger.module.scss';

const Hamburger = (props) => {
	// useEffect(() => {
	//     if(props.showMobileNavMenu){

	//     }
	// },[props.showMobileNavMenu])

	return (
		<button
			className={`${styles.hamburger} ${
				props.showMobileNavMenu && styles.active
			}`}
			onClick={props.handleClick}
		>
			<span className={styles.bar}></span>
			<span className={styles.bar}></span>
			<span className={styles.bar}></span>
		</button>
	);
};

export default Hamburger;
