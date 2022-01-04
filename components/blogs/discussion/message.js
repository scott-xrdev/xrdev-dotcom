import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import styles from './message.module.scss';

const Message = ({ message }) => {
	// add code snippets to comments

	// add min comments shown and load more comments button

	// prevent too deep of nesting and add show comment chain page button

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
					<button className={styles.replyButton}>
						<FontAwesomeIcon icon={faComment} />
						Reply
					</button>
				</div>
			</div>
			{message.replies.map((reply) => (
				<div className={styles.reply}>
					<Message message={reply} />
				</div>
			))}
		</div>
	);
};

export default Message;
