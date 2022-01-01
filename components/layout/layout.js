import { Fragment } from 'react';

import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => {
	return (
		<Fragment>
			<div className="page">
				<Navbar />
				<main>{props.children}</main>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Layout;
