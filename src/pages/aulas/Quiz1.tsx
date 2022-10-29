import { IoIosArrowDropleft } from "react-icons/io";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FooterHome } from "../../components/Footer";
import { Header } from "../../components/Header";

import '../../styles/Aula1.css'


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

export function Quiz1() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect: any) => {
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
        <div>
            <Header />
            <div className='Quiz1Main'>
                <Link to='/aula1'>
                    <IoIosArrowDropleft style={{ fontSize: '40px', position: 'fixed', left: '0', paddingLeft: '10px' }} />
                </Link>

                {showScore ? (
                    <div className='answer-section'>
                        <p style={{ padding: '10px', fontSize: '50px', marginTop: '48px' }}>Voce acertou {score} de {questions.length}</p>
                    </div>
                ) : (
                    <>
                        <div className='question-section' style={{ marginTop: '10vh' }}>
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
            </div>
            <FooterHome />
        </div>
    );
}
