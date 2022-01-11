import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './discussion-section.module.scss';
import Message from './message';
import DUMMY_MESSAGES from '../../../DUMMY_MESSAGES.js';
import NewCommentForm from './new-comment-form';
import { getComments, countComments } from '../../../lib/comments-util';

const DiscussionSection = () => {
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState([]);
	const [count, setCount] = useState(0);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		setLoading(true);
		getComments(slug)
			.then((data) => {
				const _comments = data.comments;
				setComments(_comments);
				setLoading(false);
				setCount(countComments(_comments));
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [router]);

	// const count = countMessages(DUMMY_MESSAGES);

	return (
		<section className={styles.discussion}>
			<h1>Discussion ({count})</h1>
			<NewCommentForm autofocusTextArea={false} />
			{loading ? (
				<p>Loading...</p>
			) : (
				comments && comments.map((comment) => <Message message={comment} />)
			)}
		</section>
	);
};

export default DiscussionSection;
