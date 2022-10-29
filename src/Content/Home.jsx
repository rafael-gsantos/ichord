import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './Navbar';

import GuitarFrame from './Img/GuitarFrame.svg'

import './Styles/Home.css'


function Aula(props){
    return (
        <Link to= {props.link} >
            <img src={props.image} alt='Class Icon' />
            <h2> {props.titulo} </h2>
        </Link>
    )
}


export function Home() {
    return (
        <div className='mainHome'>

            <Aula 
            link='Aula1'
            titulo="Se familiarizando com o violão"
            image={GuitarFrame }
            />

            <Navbar />

        </div>
    );
}
