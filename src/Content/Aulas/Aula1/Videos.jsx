// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Aulas.css'
import { Navbar } from '../../Navbar';

function Youtube(props){
    return(
        <div style={{ marginBottom: "30px", borderBottom:'1px solid black' }}>
            <h4 style={{ fontSize: "30px" }}> {props.titulo} </h4>
            <p style={ {fontSize: "20px"} }> {props.descricao} </p>
            <iframe width="80%" height="30%" src={`https://www.youtube.com//embed/${props.videoID}?autoplay=&mute=0`}></iframe>
        </div>
    )
}


export function Videos() {
    return (
        <div className='mainAulas'>
            <Link to={'/Aula1'} className='back'> <span class="material-symbols-outlined"> arrow_back_ios </span></Link>

            <Youtube 
                titulo="Conhecendo as Partes do VIOLÃO e suas Funcionalidades"
                descricao="Nesse video vamos aprender na pratica quais as partes do violão e suas Funcionalidades"
                videoID="gLKXMPfpL_0"
            />

            <Youtube
                titulo="Escolha o violão certo"
                descricao="existem muitas opções de violões para escolher, isso pode assustar mas nesse video iremos ajuda-lo a escolher a melhor opção"
                videoID="qn0kKNUqyIE"
            />

            <Youtube
                titulo="aprenda a segurar o violão"
                descricao="pode parecer besteira mas uma boa postura no instrumento é indispensável para se ter um longo futuro no mundo da musica"
                videoID="RqE9hRYXUGs"
            />

            <Youtube
                titulo="as cordas do violão"
                descricao="para finalizar o primeiro modulo de estudo iremos aprender sobre as cordas do violão. Desde quantidade, material, espessura e afinação"
                videoID="RebsUE14mhU"
            />

            <Navbar />
        </div>
    )
}