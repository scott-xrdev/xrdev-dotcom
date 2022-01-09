import styles from './discussion-section.module.scss';
import Message from './message';
import DUMMY_MESSAGES from '../../../DUMMY_MESSAGES.js';
import NewCommentForm from './new-comment-form';

const DiscussionSection = () => {
	const countMessages = (messages) => {
		let count = 0;

		for (let i = 0; i < messages.length; i++) {
			++count;
			count += countMessages(messages[i].replies);
		}

		return count;
	};

	const count = countMessages(DUMMY_MESSAGES);

	return (
		<section className={styles.discussion}>
			<h1>Discussion ({count})</h1>
			<NewCommentForm autofocusTextArea={false} />
			{DUMMY_MESSAGES.map((message) => (
				<Message message={message} />
			))}
		</section>
	);
};

export default DiscussionSection;
