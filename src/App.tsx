import React, {MouseEvent, useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";


const TOTAL_QUESTIONS = 10;

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [quizOver, setQuizOver] = useState(true);


    const startQuiz = async () => {
        setLoading(true);
        setQuizOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASE
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>QUIZ APPLICATION</h1>
            {quizOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button
                    className={'start'}
                    onClick={startQuiz}>
                    Start
                </button>
            ) : null}
            {!quizOver && <p className={'score'}>Score:</p>}
            {loading && <p>Loading Questions ...</p>}
            {/*<QuestionCard*/}
            {/*    questionNumber={number + 1}*/}
            {/*    totalQuestions={TOTAL_QUESTIONS}*/}
            {/*    question={questions[number].question}*/}
            {/*    answers={questions[number].answers}*/}
            {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
            {/*    callback={checkAnswer}*/}
            {/*/>*/}
            <button className={'next'} onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;
