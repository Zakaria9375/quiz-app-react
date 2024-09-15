import { Dispatch } from "react";

export interface IQuizState {
  completed: boolean;
  currentIdx: number;
  total: number;
  points: number;
}

export type IQuizAction =
  { type: "SET_POINTS", payload: number} |
  { type: "SET_IDX", payload: number} |
  { type: "SET_COMPLETED", payload: boolean } |
  { type: "RESET"}

export interface IQuizContext {
  quizState: IQuizState;
  quizDispatch: Dispatch<IQuizAction>;
}