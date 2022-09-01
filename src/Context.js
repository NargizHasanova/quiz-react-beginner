import { createContext, useState } from "react"
import { questions } from './questions';


export const QuestionContext = createContext()
export const ResultContext = createContext()
export const CounterContext = createContext()
export const RightAnswersContext = createContext()


export default function Context({ children }) {
    const [questionsData, setQuestionsData] = useState(questions);
    const [showResult, setShowResult] = useState(false);
    const [counter, setcounter] = useState(0);
    const [rightAnswerCount, setRightAnswerCount] = useState(0);
    return (
        <QuestionContext.Provider value={{ questionsData, setQuestionsData }}>
            <ResultContext.Provider value={{ showResult, setShowResult }}>
                <CounterContext.Provider value={{ counter, setcounter }}>
                    <RightAnswersContext.Provider value={{ rightAnswerCount, setRightAnswerCount }}>
                        {children}
                    </RightAnswersContext.Provider>
                </CounterContext.Provider>
            </ResultContext.Provider>
        </QuestionContext.Provider>
    )
}
