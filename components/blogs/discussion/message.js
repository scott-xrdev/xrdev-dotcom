import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import styles from './message.module.scss';
import NewCommentForm from './new-comment-form';

const Message = ({ message }) => {
	const [showNewCommentForm, setShowNewCommentForm] = useState(false);

	// add code snippets to comments

	// add min comments shown and load more comments button

	// prevent too deep of nesting and add show comment chain page button

	const replyButtonClickHandler = () => {
		setShowNewCommentForm(true);
	};

	return (
		<div key={message.id} className={styles.message}>
			<div className={styles.content}>
				<div className={styles.author}>{message.author}</div>
				<div className={styles.timestamp}>{message.timestamp}</div>
				<p>{message.content}</p>
				<div className={styles.interactions}>
					<div className={styles.likes}>
						<FontAwesomeIcon icon={faHeart} />
						{message.likes} likes
					</div>
					<button
						className={styles.replyButton}
						onClick={replyButtonClickHandler}
					>
						<FontAwesomeIcon icon={faComment} />
						Reply
					</button>
				</div>
			</div>
			{showNewCommentForm && (
				<NewCommentForm
					setShowNewCommentForm={setShowNewCommentForm}
					autofocusTextArea
				/>
			)}
			{message.replies.map((reply) => (
				<div className={styles.reply}>
					<Message message={reply} />
				</div>
			))}
		</div>
	);
};

export default Message;
