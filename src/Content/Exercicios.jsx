import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

import './Styles/Aulas.css'


export function Exercicios(){
    return(
        <div className='mainAulas'>

            <h2 style={{fontSize:"40px", marginBottom:'4vh', }}>Atividades</h2>

            <a href="https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing"><h1>Atividade 1</h1></a>

            <Navbar />
        </div>
    )
}