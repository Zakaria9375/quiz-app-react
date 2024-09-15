import { Link } from "react-router-dom";
import { useQuizContext } from "../contexts/quiz/useQuizContext";
import { Quiz } from "../database/quizzes";
import { motion } from "framer-motion";

interface Props {
	quiz: Quiz;
}

const Score = ({ quiz }: Props) => {
	const { quizState } = useQuizContext();
	return (
		<>
			<motion.article
				className="desktop:flex justify-between"
				aria-live="polite"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="w-full desktop:max-w-[465px]">
					<h1 className="typo-h-l mb-2 font-light text-mtx">Quiz completed</h1>
					<h2 className="typo-h-l font-bold text-mtx">You scored...</h2>
				</div>
				<div className="mt-10 tablet:mt-16 w-full desktop:max-w-[564px]">
					<div className="rounded-xl tablet:rounded-3xl bg-sbg w-full p-8 tablet:p-12">
						<div className="score">
							<h3 className="flex items-center justify-center gap-4 tablet:gap-6">
								<img
									src={`images/icon-${quiz.icon}.svg`}
									alt=""
									className="size-10 p-[6px] tablet:p-2 tablet:size-14 rounded-lg tablet:rounded-xl"
									style={{ backgroundColor: quiz.clr }}
								/>
								<span className="text-mtx typo-h-s">{quiz.title}</span>
							</h3>
							<motion.h4
								className="typo-display my-4 tablet:mt-10 text-mtx text-center"
								aria-description="your score"
								initial={{ opacity: 0, scale: 0.3 }}
								whileInView={{ opacity: 1, scale: 1 }}
							>
								{quizState.points}
							</motion.h4>
							<h5 className="text-stx typo-b-m text-center">
								out of {quizState.total}
							</h5>
						</div>
					</div>
					<Link
						to="/"
						className="g-btn submit-btn block"
						aria-label="Take another quiz"
					>
						Play Again
					</Link>
				</div>
			</motion.article>
		</>
	);
};

export default Score;
