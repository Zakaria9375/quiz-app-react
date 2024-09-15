import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<main className="flex flex-col justify-center items-center space-y-8">
			<span
				className="block text-mtx text-8xl tracking-widest m-8"
				aria-hidden="true"
			>
				404
			</span>
			<h1 className="typo-h-m  text-mtx max-w-[800px] text-center">
				The page you are looking for does not exist.
			</h1>
			<Link to="/" className="g-btn submit-btn max-w-[330px]">
				Back to Home Page
			</Link>
		</main>
	);
};

export default NotFoundPage;
