// components/OptionButton.jsx
import React from 'react';

const OptionButton = ({ option, onClick, isSelected, isAnswered, isCorrect }) => {
    return (
        <button
            style={{
                backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : '#3b82f6',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                marginBottom: '0.5rem',
                border: 'none',
                cursor: isAnswered ? 'not-allowed' : 'pointer',
                width: '100px',
            }}
            onClick={onClick}
            disabled={isAnswered}
        >
            {option}
        </button>
    );
};

export default OptionButton;