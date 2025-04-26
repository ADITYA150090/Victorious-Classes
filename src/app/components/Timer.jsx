 // components/Timer.jsx
import React, { useEffect, useState } from 'react';

const Timer = ({ questionIndex, totalQuestions }) => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        setTimeLeft(30); // Reset timer for each question
    }, [questionIndex]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            // Automatically move to the next question when time runs out
            setTimeLeft(30); // Reset for the next question
        }
    }, [timeLeft]);

    return (
        <div style={styles.timer}>
            Time Left: {timeLeft} seconds
        </div>
    );
};

const styles = {
    timer: {
        fontSize: '1rem',
        marginBottom: '1rem',
    },
};

export default Timer;