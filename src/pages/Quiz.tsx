import { useParams } from "react-router-dom";
import { quizzes } from "../database/quizzes";
import { QuizProvider } from "../contexts/quiz/quizContext";
import QuizContent from "../components/QuizContent";

import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect } from "react";
import useDataFetcher from "../hooks/useDataFetcher";

// ---------------------------------------------------

const Quiz = () => {
	const { quizName } = useParams();
	const navigate = useNavigate();
	// ----------------
	const quiz = quizzes.find((quiz) => quiz.icon === quizName);
	useEffect(() => {
		if (!quiz) {
			navigate("/not-found");
		}
	}, [quiz, navigate]);
	// ----------------
	const {data: questions,loading,error} = useDataFetcher(quiz?.title ?? "");
	useEffect(() => {
		if (error) {
			navigate("/not-found");
		}
	}, [error, navigate]);
	// ---------------
	if (loading) return <Loading />;
	return (
		quiz && (
			<>
				<header className="flex items-center gap-4 tablet:gap-6 mb-12 desktop:mb-[85px]">
					<img
						src={`images/icon-${quiz?.icon}.svg`}
						alt=""
						className="size-10 p-[6px] tablet:p-2 tablet:size-14 rounded-lg tablet:rounded-xl"
						style={{ backgroundColor: quiz?.clr }}
					/>
					<span className="text-mtx typo-h-s">{quiz?.title}</span>
				</header>
				<QuizProvider total={questions.length}>
					<QuizContent quiz={quiz} questions={questions} />
				</QuizProvider>
			</>
		)
	);
};

export default Quiz;
