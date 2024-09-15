import { useQuizContext } from "../contexts/quiz/useQuizContext"

const Progress = () => {
  const {quizState} = useQuizContext();
  const progress = ((quizState.currentIdx + 1) * 100) / quizState.total;
  return (
    <>
      <div
        className="quiz-progress rounded-full bg-sbg w-full h-4 p-2 flex items-center"
      >
        <div
          className="h-2 bg-my-purple rounded-full duration-1000 transition-all"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width: `${progress}%`}}
        ></div>
      </div>
    </>
  )
}

export default Progress
