import styles from './message.module.scss';

const Message = ({ message }) => {
	return (
		<div key={message.id} className={styles.message}>
			<div className={styles.content}>
				<div className={styles.author}>{message.author}</div>
				<div className={styles.timestamp}>{message.timestamp}</div>
				<p>{message.content}</p>
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
