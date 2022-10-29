import React from 'react';

import '../../Styles/Aulas.css'
import { Link } from 'react-router-dom';

import GuitarFrame from '../../Img/GuitarFrame.svg'
import { Navbar } from '../../Navbar';

export function Aula1(){
    return(
        <div className='mainAulas'>
            <Link to={'/'} className='back'><span class="material-symbols-outlined"> close </span></Link>

            <img src={GuitarFrame} alt="Class Logo" />
            <h3>Se familiarizando com o violão</h3>
            <h5 style={{marginBottom: '5vh' }}>Total: 4 Aulas</h5>
            

            <Link to={'/Aula1/Intro'} className='linkItem'><h1>Introdução</h1></Link>

            <Link to={'/Aula1/Videos'} className='linkItem'><h1>Videos</h1></Link>

            <Link to={'/Quiz'} className='linkItem'><h1>Quiz</h1></Link>




            <Navbar />
        </div>
    )
}