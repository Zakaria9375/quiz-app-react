import classNames from "classnames";
import { useQuestionContext } from "../contexts/question/useQuestionContext";
import { motion } from "framer-motion";

interface Props {
	choices: string[];
	correctAnswer: string;
}

// -------------------------------------

const Choices = ({ choices, correctAnswer }: Props) => {
	const { questionState, questionDispatch } = useQuestionContext();
	const { isSubmitted, selected } = questionState;

	// --------------------
	const getCorrectAnswer = (choice: string) =>
		isSubmitted && choice === correctAnswer;
	const getSelectedIncorrectly = (choice: string) =>
		isSubmitted && selected === choice && choice !== correctAnswer;
	const getSelectedClass = (choice: string) =>
		choice === selected && !isSubmitted;
	// --------------------

	function selectChoice(choice: string) {
		questionDispatch({ type: "SET_SELECTED", payload: choice });
		questionDispatch({ type: "SET_ERR", payload: false });
	}
	const getChoiceNr = (idx: number) => String.fromCharCode(97 + idx);
  
	// -------------------
	const btnClasses = (choice: string) =>
		classNames(
			"g-btn bg-sbg desktop:pl-5 pr-12 text-mtx desktop:py-[18px] flex gap-4 tablet:gap-8 items-center group transition-all duration-200",
			{
				selected: getSelectedClass(choice),
				"selected-false": getSelectedIncorrectly(choice),
				"selected-true": getCorrectAnswer(choice),
			}
		);
	const spanClasses = (choice: string) =>
		classNames(
			"px-[14px] py-[11px] tablet:py-[14px] tablet:px-[18px] rounded-lg tablet:rounded-xl bg-light-grey text-grey-navy uppercase group-hover:text-my-purple group-hover:bg-[#F6E7FF] transition-all duration-200",
			{
				"nr-hover": getSelectedClass(choice),
				"nr-selected-true": getCorrectAnswer(choice),
				"nr-selected-false": getSelectedIncorrectly(choice),
			}
		);
	// -------------------

	return (
		<>
			<ul className="space-y-3 tablet:space-y-6">
				{choices.map((choice, index) => (
					<li className="relative" key={index}>
						<button
							onClick={() => selectChoice(choice)}
							className={btnClasses(choice)}
							disabled={isSubmitted}
							aria-pressed={getSelectedClass(choice)}
						>
							<span className={spanClasses(choice)}>
                {getChoiceNr(index)}
              </span>
							{choice}
						</button>
						{getCorrectAnswer(choice) && (
							<motion.img
								src="images/icon-correct.svg"
								alt="This is a Correct answer"
								className="custom-img"
								aria-live="polite"
								initial={{opacity: 0, x: 10, y: "50%"}}
								whileInView={{opacity: 1, x: 0, y: "50%"}}
							/>
						)}
						{getSelectedIncorrectly(choice) && (
							<motion.img
								src="images/icon-incorrect.svg"
								alt="This is a Wrong answer"
								className="custom-img"
								aria-live="polite"
								initial={{opacity: 0, x: 10, y: "50%"}}
								whileInView={{opacity: 1, x: 0, y: "50%"}}
							/>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default Choices;
