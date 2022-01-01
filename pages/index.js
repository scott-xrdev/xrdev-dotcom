import { Fragment } from 'react';
import Head from 'next/head';

import TestMod from '../components/home-page/test-mod';
import Hero from '../components/home-page/hero';
import InfoSection from '../components/home-page/info-section';

const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<title>XRDEV.com</title>
				<meta name="description" content="A blog about vr and ar development" />
			</Head>
			<Hero />
			<InfoSection />
			{/* <TestMod /> */}
		</Fragment>
	);
};

export default HomePage;
