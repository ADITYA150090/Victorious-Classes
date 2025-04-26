// pages/index.jsx
import React from 'react';
import Quiz from '../app/components/Quiz';
import Navbar from '../app/components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1>Quiz App</h1>
            <Quiz />
        </div>
    );
};

export default Home;