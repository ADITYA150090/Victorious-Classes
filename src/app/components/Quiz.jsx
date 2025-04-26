 // components/Quiz.jsx
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultScreen from './ResultScreen';
import quizData from '../data/quizData';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizFinished(false);
    };

    return (
        <div style={styles.quizContainer}>
            {isQuizFinished ? (
                <ResultScreen score={score} totalQuestions={quizData.length} onRestart={handleRestart} />
            ) : (
                <QuestionCard
                    questionData={quizData[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    questionIndex={currentQuestionIndex}
                    totalQuestions={quizData.length}
                />
            )}
        </div>
    );
};

const styles = {
    quizContainer: {
        padding: '2rem',
    },
};

export default Quiz;