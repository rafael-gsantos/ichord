import React, { useState } from 'react';

import '../../Styles/Quiz.css'

import { Link } from 'react-router-dom';
import { Navbar } from '../../Navbar';


const questions = [
    {
        questionText: 'Qual a sequencia correta das notas da escala maior natural?',
        answerOptions: [
            { answerText: 'do, re, mi, fa, sol, la, si', isCorrect: true },
            { answerText: 'si, re, sol, do, la, mi, fa', isCorrect: false },
            { answerText: 're, do, fa, mi, la, sol ,si', isCorrect: false },
            { answerText: 'fa, la ,re, do, sol, mi, si', isCorrect: false }],
    },

];

export function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

        
    };
    return (
        <div className='quiz'>
            <Link to={'/Aula1'} className='back'> <span class="material-symbols-outlined"> arrow_back_ios </span></Link>

            {showScore ? (
                <div className='answer-section'>
                    <p style={{ padding: '10px', fontSize: '50px', marginTop:'35vh' }}>Voce acertou {score} de {questions.length}</p>
                    <Link onClick='window.location.reload();'><span style={{ boxShadow: '0 0 5px black', borderRadius: '10px', padding:'10px', fontSize:'40px',marginRight: '10px' }} class="material-symbols-outlined"> refresh </span></Link>
                    <Link to={'/Aula1'} ><span style={{ boxShadow: '0 0 5px black', borderRadius: '10px', padding: '10px', fontSize: '40px',marginLeft: '10px' }} class="material-symbols-outlined"> close </span></Link>

                </div>
            ) : (
                <>
                    <div className='question-section' style={{marginTop:'10vh'}}>
                        <div className='question-count'>
                            <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'><h4>{questions[currentQuestion].questionText}</h4></div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
            <Navbar />

        </div>
    );
}
