import React from 'react';
import { Link } from 'react-router-dom';

import useCollapse from 'react-collapsed';

import { Navbar } from '../../Navbar'

import '../../Styles/Aulas.css'


function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className='coisa' {...getToggleProps()}>
                <h2> {props.titulo} </h2>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <p> {props.conteudo} </p>
                </div>
            </div>
        </div>
    );
}


export function Intro() {

    return (
        <div className='mainAulas'>
            <Link to={'/Aula1'} className='back'> <span class="material-symbols-outlined"> arrow_back_ios </span></Link>


            <Collapsible 
                titulo="Conheça as partes do instrumento"
                conteudo="Você não precisa decorar todas as partes, mas aprender pelo menos as partes principais é importante 
                para poder acompanhar uma aula de violão. Confira abaixo a nomenclatura básica das partes principais 
                (mão, tarraxas, braço, casas, trastes, corpo, boca e cavalete)"
            />

            <Collapsible
                titulo="Escolha o violão certo"
                conteudo="Existem basicamente dois tipos de violão: de nylon e de aço. Para iniciantes, o ideal é começar a 
                tocar com um violão de nylon, pois o nylon é mais macio e facilita a execução (você não precisa pressionar as 
                cordas com tanta força). Essa escolha vai facilitar bastante seus estudos. É possível comprar um bom violão 
                de nylon para iniciantes na faixa dos R$ 300,00 a R$ 500,00 (você não precisa investir caro logo de início, 
                aprenda primeiro a tocar coisas simples com um violão de estudo e depois que você já estiver mais experiente, 
                escolha um violão que atenda melhor seus novos desejos musicais)."
            />

            <Collapsible
                titulo="Aprenda a segurar o violão"
                conteudo="Você pode apoiar o violão na perda direita ou na perna esquerda. Posicionar na perna esquerda é mais 
                indicado para quem quer tocar música clássica, mas a maioria dos violonistas, principalmente quem toca música 
                popular, segura o violão na perda direita, deixando-o levemente inclinado para permitir uma boa postura das duas mãos."
            />

            <Collapsible
                titulo="cordas do violão"
                conteudo= {
                    <div>
                        <p>Sobre a numeração das cordas do violão, o certo é contar de baixo para cima (a corda mais aguda é a primeira e a corda mais grave é a 6ª). A nota de cada corda é a seguinte:</p>
                        <ul>
                            <li>1ª corda: mi</li>
                            <li>2ª corda: si</li>
                            <li>3ª corda: sol</li>
                            <li>4ª corda: ré</li>
                            <li>5ª corda: lá</li>
                            <li>6ª corda: mi</li>
                        </ul>
                    </div>
                }
            />

            <Navbar />
        </div>
    )
}