import { Fragment } from 'react';

import Navbar from './navbar';
import Footer from './footer';

import styles from './layout.module.scss';

const Layout = (props) => {
	return (
		<Fragment>
			<div className={styles.page}>
				<Navbar />
				<main>{props.children}</main>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Layout;
