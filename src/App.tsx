import React, {MouseEvent} from 'react';
import QuestionCard from "./components/QuestionCard";

const App = () => {
    const startQuiz = async () => {

    }

    const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>QUIZ APPLICATION</h1>
            <button
                className={'start'}
                onClick={startQuiz}
            >
                Start
            </button>
            <p className={'score'}>Score:</p>
            <p>Loading Questions ...</p>
            <QuestionCard />
            <button className={'next'} onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;
