import { createContext, ReactNode, useReducer } from "react";
import { IQuestionAction, IQuestionContext, IQuestionState } from "./IQuestionContext";
// ------------------------------

const stateInitialValues: IQuestionState = {
  err: false,
  isCorrect: false,
  isSubmitted: false,
  selected: ''
} 

// ------------------------------
export const QuestionContext = createContext<IQuestionContext>({
  questionState: stateInitialValues,
  questionDispatch: () => {}
});
// ------------------------------

function questionReducer(state: IQuestionState, action: IQuestionAction): IQuestionState {
  switch (action.type) {
    case 'SET_CORRECT': {
      return { ...state, isCorrect: action.payload  };
    }
    case 'SET_SUBMITTED': {
      return { ...state, isSubmitted: action.payload };
    }
    case 'SET_SELECTED': {
      return { ...state, selected: action.payload };
    }
    case 'SET_ERR': {
      return { ...state, err: action.payload };
    }
    case 'RESET':
      return stateInitialValues;
    default:
      return state;
  }
}

// ------------------------------
interface QuestionProviderProps {
  children: ReactNode;
}
// ------------------------------

export function QuestionProvider({children}:QuestionProviderProps) {
  const [questionState, questionDispatch] = useReducer(questionReducer, stateInitialValues)
  return (
    <QuestionContext.Provider value={{questionState, questionDispatch}}>
      {children}
    </QuestionContext.Provider>
  )
}


