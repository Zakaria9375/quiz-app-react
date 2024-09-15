import { QuestionProvider } from "../contexts/question/questionContext";
import { useQuizContext } from "../contexts/quiz/useQuizContext";
import { Quiz } from "../database/quizzes";
import { QuizDocument } from "../models/quizDocument";
import Question from "./Question";
import Score from "./Score";

interface Props {
	quiz: Quiz;
	questions: QuizDocument[];
}

const QuizContent = ({ quiz, questions }: Props) => {
	const { quizState } = useQuizContext();
	const { completed, currentIdx, total } = quizState;
	return (
		<main>
			{completed ? (
				<Score quiz={quiz} />
			) : (
				<QuestionProvider>
					<Question
						header={`Question ${currentIdx + 1} of ${total}`}
						quiz={questions[currentIdx]}
					/>
				</QuestionProvider>
			)}
		</main>
	);
};

export default QuizContent;
