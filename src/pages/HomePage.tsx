import { Link } from "react-router-dom";
import { Quiz, quizzes } from "../database/quizzes";

const HomePage = () => {
	return (
		<>
			<div className="pt-[88px] tablet:pt-[105px] desktop:pt-[140px] flex flex-col desktop:flex-row gap-10 tablet:gap-16 desktop:justify-between">
				<main>
					<h1 className="text-mtx font-light text-[2.5rem] tablet:text-[4rem] flex flex-col gap-2">
						<span>Welcome to the </span>
						<span className="font-medium mt">Frontend Quiz!</span>
					</h1>
					<h2 className="typo-b-s mt-4 desktop:mt-12 text-stx">
						Pick a subject to get started.
					</h2>
				</main>
				<nav className="flex flex-col gap-3 tablet:gap-6 flex-1 desktop:max-w-[564px]">
					{quizzes.map((quiz: Quiz, index) => (
						<Link
							to={`quiz/${quiz.icon}`}
							className="rounded-xl bg-sbg shadow-ninja flex gap-4 tablet:gap-8 p-3 items-center desktop:p-5 w-full" 
							key={index}
						>
							<img
								src={`images/icon-${quiz.icon}.svg`}
								alt=""
								className="size-10 p-[6px] tablet:p-2 tablet:size-14 rounded-lg tablet:rounded-xl"
								style={{ backgroundColor: quiz.clr }}
							/>
							<span className="text-mtx typo-h-s">{quiz.title}</span>
						</Link>
					))}
				</nav>
			</div>
		</>
	);
};

export default HomePage;
