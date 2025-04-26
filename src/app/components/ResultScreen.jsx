 // components/ResultScreen.jsx
import React from 'react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    return (
        <div style={styles.resultScreen}>
            <h2>Your Score: {score} / {totalQuestions}</h2>
            <button onClick={onRestart} style={styles.restartButton}>Restart Quiz</button>
        </div>
    );
};

const styles = {
    resultScreen: {
        textAlign: 'center',
        marginTop: '2rem',
    },
    restartButton: {
        padding: '0.5rem 1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
    },
};

export default ResultScreen;