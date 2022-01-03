import NewBlogSection from '../../components/blogs/new-blog/new-blog-section';
import { getBlogData } from '../../lib/blogs-util';

const NewBlogPage = (props) => {
	return <NewBlogSection blog={props.blog} />;
};

export const getStaticProps = () => {
	const testBlog = getBlogData('mastering-javascript');

	return {
		props: {
			blog: testBlog,
		},
	};
};

export default NewBlogPage;
