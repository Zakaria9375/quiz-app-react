import { Dispatch } from "react";

export interface IQuestionState {
  isSubmitted: boolean;
  isCorrect: boolean;
  selected: string;
  err: boolean;
}

export type IQuestionAction =
  { type: "SET_CORRECT", payload: boolean} |
  { type: "SET_SELECTED", payload: string} |
  { type: "SET_ERR", payload: boolean } |
  { type: "SET_SUBMITTED", payload: boolean} | 
  { type: "RESET"}

export interface IQuestionContext {
  questionState: IQuestionState;
  questionDispatch: Dispatch<IQuestionAction>;
}