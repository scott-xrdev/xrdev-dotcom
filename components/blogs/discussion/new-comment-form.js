import { Fragment, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { createNewComment } from '../../../lib/comments-util';
import styles from './new-comment-form.module.scss';

const NewCommentForm = ({ setShowNewCommentForm, autofocusTextArea }) => {
	const [showButtons, setShowButtons] = useState(false);
	// const [slug, setSlug] = useState('');
	const textAreaRef = useRef();

	const router = useRouter();
	const slug = router.query.slug;

	// useEffect(() => {
	// 	setSlug(router.query.slug);
	// }, router);

	const textAreaFocusHandler = () => {
		setShowButtons(true);
	};
	const textAreaBlurHandler = () => {
		const content = textAreaRef.current.value;

		if (setShowNewCommentForm != undefined && !content) {
			setShowNewCommentForm(false);
			return;
		}

		if (content) {
			console.log(
				'you wrote a reply, cannot destroy it until you delete it manually'
			);
			return;
		}

		setShowButtons(false);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const content = textAreaRef.current.value;

		if (content) {
			const comment = await createNewComment({ content, slug });
			console.log(comment);
		}

		if (setShowNewCommentForm != undefined) {
			setShowNewCommentForm(false);
			return;
		}

		setShowButtons(false);

		textAreaRef.current.value = '';
	};

	const handleCancelButtonClick = (event) => {
		event.preventDefault();

		if (setShowNewCommentForm != undefined) {
			setShowNewCommentForm(false);
			return;
		}

		setShowButtons(false);
		textAreaRef.current.value = '';
	};

	return (
		<form className={styles.newCommentForm} onSubmit={handleSubmit}>
			<textarea
				autoFocus={autofocusTextArea}
				placeholder="Share your thoughts"
				rows="8"
				onFocus={textAreaFocusHandler}
				onBlur={textAreaBlurHandler}
				ref={textAreaRef}
			></textarea>
			{showButtons && (
				<Fragment>
					<button className={styles.submitBtn}>Submit</button>
					<button className={styles.previewBtn}>Preview</button>
					<button
						className={styles.cancelBtn}
						onClick={handleCancelButtonClick}
					>
						Cancel
					</button>
				</Fragment>
			)}
		</form>
	);
};

export default NewCommentForm;
