import { useRef, useContext } from 'react';

import styles from './contact-form.module.scss';

const ContactForm = () => {
	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const messageInputRef = useRef();

	const sendMessageHandler = async (event) => {
		event.preventDefault();
		console.log('sendMessageHandler called');
	};

	return (
		<section className={styles.contact}>
			<form onSubmit={sendMessageHandler}>
				<h1>What's on your mind?</h1>
				<input
					type="email"
					id="email"
					placeholder="Email Address"
					ref={emailInputRef}
					required
				/>
				<input
					type="text"
					id="name"
					placeholder="Name"
					ref={nameInputRef}
					required
				/>
				<textarea
					id="message"
					rows="5"
					placeholder="Message"
					ref={messageInputRef}
					required
				></textarea>
				<button>Submit Message</button>
			</form>
		</section>
	);
};

export default ContactForm;
