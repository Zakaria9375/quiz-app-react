import { motion } from "framer-motion";
import { useQuestionContext } from "../contexts/question/useQuestionContext";
import { useQuizContext } from "../contexts/quiz/useQuizContext";
import { QuizDocument } from "../models/quizDocument";
import Choices from "./Choices";
import Loading from "./Loading";
import Progress from "./Progress";

interface Props {
	quiz: QuizDocument;
	header: string;
}

// ---------------------------------------------------

const Question = ({ quiz, header }: Props) => {
	const { questionState, questionDispatch } = useQuestionContext();
	const { quizState, quizDispatch } = useQuizContext();
	const onSubmit = () => {
		if (questionState.selected) {
			questionDispatch({
				type: "SET_CORRECT",
				payload: questionState.selected === quiz.answer,
			});
			questionDispatch({ type: "SET_SUBMITTED", payload: true });
		} else {
			questionDispatch({ type: "SET_ERR", payload: true });
		}
	};
	const onNext = () => {
		const newPointsValue: number = questionState.isCorrect
			? quizState.points
			: quizState.points - 1;
		quizDispatch({ type: "SET_POINTS", payload: newPointsValue });
		questionDispatch({ type: "RESET" });
		if (quizState.currentIdx < quizState.total - 1) {
			quizDispatch({ type: "SET_IDX", payload: quizState.currentIdx + 1 });
		} else {
			quizDispatch({ type: "SET_COMPLETED", payload: true });
		}
	};

	if (!quiz?.question) return <Loading />;

	return (
		<>
			<motion.article
				aria-live="polite"
				aria-labelledby="question-nr"
				className="desktop:flex justify-between desktop:gap-8"
				aria-describedby={questionState.err ? "error" : ""}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<div className="w-full desktop:max-w-[465px] flex flex-col desktop:max-h-[452px]">
					<h2
						className="quiz-heading mb-3 tablet:mb-7 text-stx typo-b-s"
						id="question-nr"
					>
						{header}
					</h2>
					<h1 className="typo-h-m text-mtx">{quiz?.question}</h1>
					<div className="mt-6 mb-10 tablet:mt-10 tablet:mb-16 desktop:mt-auto desktop:mb-0">
						<Progress />
					</div>
				</div>
				<div className="w-full desktop:max-w-[564px]">
					<Choices choices={quiz.choices} correctAnswer={quiz.answer} />
					{!questionState.isSubmitted ? (
						<button className="g-btn submit-btn" onClick={onSubmit}>
							Submit Answer
						</button>
					) : (
						<button
							className="g-btn submit-btn"
							aria-live="polite"
							onClick={onNext}
						>
							Next Question
						</button>
					)}
					{questionState.err && (
						<motion.p
							aria-live="polite"
							className="flex items-center justify-center gap-2 mt-3 tablet:mt-8"
							id="error"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<img
								src="images/icon-error.svg"
								alt="Error icon"
								className="size-8 tablet:size-10"
							/>
							<span className="text-my-red typo-b-m">
								Please select an answer
							</span>
						</motion.p>
					)}
				</div>
			</motion.article>
		</>
	);
};

export default Question;
