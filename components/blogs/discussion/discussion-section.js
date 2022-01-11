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
	const [rerenderer, setRerenderer] = useState(0);
	const router = useRouter();
	const slug = router.query.slug;

	useEffect(() => {
		setLoading(true);
		getComments(slug)
			.then((data) => {
				const _comments = data.comments;
				setComments(_comments);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [router, rerenderer]);

	useEffect(() => {
		setCount(countComments(comments));
	}, [comments]);

	// const count = countMessages(DUMMY_MESSAGES);

	return (
		<section className={styles.discussion}>
			<h1>Discussion ({count})</h1>
			<NewCommentForm
				autofocusTextArea={false}
				rerenderer={rerenderer}
				setRerenderer={setRerenderer}
			/>
			{loading ? (
				<p>Loading...</p>
			) : (
				comments &&
				comments.map((comment) => (
					<Message
						message={comment}
						rerenderer={rerenderer}
						setRerenderer={setRerenderer}
					/>
				))
			)}
		</section>
	);
};

export default DiscussionSection;
