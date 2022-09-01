import React, { useContext } from 'react'
import {
  CounterContext,
  QuestionContext,
  ResultContext,
  RightAnswersContext,
} from '../Context'

export default function Result() {
  const { counter, setcounter } = useContext(CounterContext)
  const { showResult, setShowResult } = useContext(ResultContext)
  const { rightAnswerCount, setRightAnswerCount } = useContext(RightAnswersContext)
  const { questionsData, setQuestionsData } = useContext(QuestionContext)

  function tryAgain() {
    setcounter(0)
    setShowResult(false)
    setRightAnswerCount(0)
  }

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {rightAnswerCount} ответа из {questionsData.length}
      </h2>
      <button onClick={tryAgain}>Попробовать снова</button>
    </div>
  )
}
