// components/QuestionCard.jsx
import React, { useState, useEffect } from 'react';
import OptionButton from './OptionButton';
import Timer from './Timer';

const QuestionCard = ({ questionData, onAnswer, questionIndex, totalQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        setIsCorrect(option === questionData.answer);
        onAnswer(option === questionData.answer);
    };

    useEffect(() => {
        if (isAnswered) {
            const timer = setTimeout(() => {
                setIsAnswered(false);
                setSelectedOption(null);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isAnswered]);

    return (
        <div style={styles.questionCard}>
            <h2 style={styles.questionTitle}>{questionData.question}</h2>
            <Timer questionIndex={questionIndex} totalQuestions={totalQuestions} />
            <div style={styles.optionsContainer}>
                {questionData.options.map((option, index) => (
                    <OptionButton
                        key={index}
                        option={option}
                        onClick={() => handleOptionClick(option)}
                        isSelected={selectedOption === option}
                        isAnswered={isAnswered}
                        isCorrect={isCorrect && option === questionData.answer}
                    />
                ))}
            </div>
            {isAnswered && (
                <div style={{ ...styles.feedback, color: isCorrect ? 'green' : 'red' }}>
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                </div>
            )}
        </div>
    );
};

const styles = {
    questionCard: {
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    questionTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    feedback: {
        marginTop: '1rem',
        fontWeight: 'bold',
    },
};

export default QuestionCard;