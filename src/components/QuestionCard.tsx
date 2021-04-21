import React, {FC, MouseEvent} from "react";
import {AnswerObject} from "../App";
import {Wrapper, ButtonWrapper} from "./QuestionCard.styles";

type questionCardProps = {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: FC<questionCardProps> = (
    {
        question,
        answers,
        callback,
        userAnswer,
        questionNumber,
        totalQuestions
    }) => (
    <Wrapper>
        <p className={'number'}>
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map(answer => (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button
                        disabled={!!userAnswer}
                        value={answer}
                        onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)


export default QuestionCard;