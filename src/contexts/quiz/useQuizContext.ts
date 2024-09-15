import { useContext } from "react";
import { IQuizContext } from "./IQuizContext";
import { QuizContext } from "./quizContext";


export function useQuizContext() {
  return useContext<IQuizContext>(QuizContext);
}