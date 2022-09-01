import React, { useContext, useState } from 'react'
import {
  CounterContext,
  QuestionContext,
  ResultContext,
  RightAnswersContext,
} from '../Context'

export default function Game() {
  const { counter, setcounter } = useContext(CounterContext)
  const { questionsData, setQuestionsData } = useContext(QuestionContext)
  const { showResult, setShowResult } = useContext(ResultContext)
  const { rightAnswerCount, setRightAnswerCount } = useContext(
    RightAnswersContext,
  )
  const currentQuestion = questionsData[counter]
  const progress = Math.round((counter / questionsData.length) * 100)

  function goToNextQuestion(variant) {
    if (currentQuestion.correct === variant) {
      setRightAnswerCount((prev) => prev + 1)
    }
    if (counter < questionsData.length - 1) {
      setcounter((prev) => prev + 1)
    } else if (counter === questionsData.length - 1) {
      setShowResult(true)
    }
  }

  return (
    <>
      <div className="progress">
        <div
          style={{ width: progress + '%' }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{currentQuestion.title}</h1>
      <ul>
        <li onClick={() => goToNextQuestion(0)}>
          {currentQuestion.variants[0]}
        </li>
        <li onClick={() => goToNextQuestion(1)}>
          {currentQuestion.variants[1]}
        </li>
        <li onClick={() => goToNextQuestion(2)}>
          {currentQuestion.variants[2]}
        </li>
      </ul>
    </>
  )
}
