import { IoIosArrowDropleft } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FooterHome } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Youtube } from '../../components/Youtube';

import '../../styles/Aula1.css'


export function Video1() {
    return (
        <div>
            <Header />
            <div className='Video1Main'>
                <Link to='/aula1'>
                    <IoIosArrowDropleft style={{ fontSize: '40px', position: 'fixed', left: '0', paddingLeft: '10px' }} />
                </Link>

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

            </div>
            <FooterHome />
        </div>
    )
}