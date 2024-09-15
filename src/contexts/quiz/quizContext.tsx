import { createContext, ReactNode, useReducer } from "react";
import { IQuizAction, IQuizContext, IQuizState } from "./IQuizContext";

const initializeState = (total: number): IQuizState => ({
	completed: false,
	currentIdx: 0,
  total,
	points: total,
});

// ------------------------------
export const QuizContext = createContext<IQuizContext>({
	quizState: initializeState(0),
	quizDispatch: () => {},
});
// ------------------------------

function questionReducer(state: IQuizState, action: IQuizAction): IQuizState {
	switch (action.type) {
		case "SET_COMPLETED": {
			return { ...state, completed: action.payload };
		}
		case "SET_IDX": {
			return { ...state, currentIdx: action.payload };
		}
		case "SET_POINTS": {
			return { ...state, points: action.payload };
		}
		case "RESET":
			return initializeState(0);
		default:
			return state;
	}
}

// ------------------------------
interface QuestionProviderProps {
	children: ReactNode;
	total: number;
}
// ------------------------------

export function QuizProvider({ children, total }: QuestionProviderProps) {
	const [quizState, quizDispatch] = useReducer(
		questionReducer,
    total,
		initializeState
	);
	return (
		<QuizContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</QuizContext.Provider>
	);
}
