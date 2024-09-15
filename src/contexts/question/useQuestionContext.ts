import { useContext } from "react";
import { IQuestionContext } from "./IQuestionContext";
import { QuestionContext } from "./questionContext";

export function useQuestionContext() {
  return useContext<IQuestionContext>(QuestionContext);
}