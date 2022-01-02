import { Fragment } from 'react';
import Head from 'next/head';
import AboutSection from '../../components/about-page/about-section';

const AboutPage = () => {
	return (
		<Fragment>
			<Head>
				<title>About</title>
				<meta name="description" content="What is xrdev.com?" />
			</Head>
			<AboutSection />
		</Fragment>
	);
};

export default AboutPage;
