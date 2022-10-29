import React from 'react';
import { Navbar } from './Navbar';

import './Styles/More.css'

import Whatsapp from './Img/Whatsapp.svg'
import Email from './Img/Email.svg'
import Phone from './Img/Phone.svg'
import Map from './Img/Map.svg'
import Insta from './Img/Insta.svg'
import Face from './Img/Face.svg'

export function More(){
    return(
        <div className='mainConfig'>

            

            <h1>Sobre Nos</h1>

            <p>Em mais de 20 anos, a Daccord se  como o maior catálogo 
                em produtos de tecnologia musical para Músicos, Compositores, Instrumentistas, 
                Produtores, Djs, Professores e Instituições de Ensino. Se você curte música e tecnologia, 
                temos muito a conversar!</p>

            <h1>Onde nos encontrar</h1>

            <div className='find'>
                <a href='/'><img src={Whatsapp} alt='Whatsapp logo' /> </a>
                <a href='/'><img src={Phone} alt='Phone logo' /> </a>
                <a href='/'><img src={Email} alt='Email logo' /> </a>
                <a href='/'><img src={Map} alt='Map logo' /> </a>
            </div>

            <h1>Nos Siga</h1>
            <div className='follow'>

                <a href='/'><img src={Insta} alt='Map logo' /> </a>
                <a href='/'><img src={Face} alt='Map logo' /> </a>

            </div>

            <Navbar />
        </div>
    )
}