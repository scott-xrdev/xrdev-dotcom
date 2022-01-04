import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../../components/contact-page/contact-form';

const ContactPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Contact Us</title>
				<meta name="description" content="Send us a message" />
			</Head>
			<ContactForm />
		</Fragment>
	);
};

export default ContactPage;
