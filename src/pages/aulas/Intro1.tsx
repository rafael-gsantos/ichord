import { IoIosArrowDropleft } from "react-icons/io"
import { Link } from "react-router-dom"
import { FooterHome } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Text } from "../../components/Text"

import '../../styles/Aula1.css'

export function Intro1(){
    return(
        <div>
            <Header />
            <div className='Intro1Main'>
                <Link to='/aula1'>
                    <IoIosArrowDropleft style={{ fontSize: '40px', position: 'fixed', left: '0', paddingLeft: '10px' }} />
                </Link>

                <Text 
                    title='Conheça as partes do instrumento' 
                    text='Você não precisa decorar todas as partes, 
                    mas aprender pelo menos as partes principais é 
                    importante para poder acompanhar uma aula de 
                    violão. Confira abaixo a nomenclatura básica 
                    das partes principais (mão, tarraxas, braço, 
                    casas, trastes, corpo, boca e cavalete)'

                    style={{marginTop: '30px', paddingLeft: '50px', paddingRight: '50px',}}
                />

                <Text
                    title='Escolha o violão certo'
                    text='Existem basicamente dois tipos de violão: 
                    de nylon e de aço. Para iniciantes, o ideal é 
                    começar a tocar com um violão de nylon, pois o 
                    nylon é mais macio e facilita a execução 
                    (você não precisa pressionar as cordas com tanta força). 
                    Essa escolha vai facilitar bastante seus estudos. 
                    É possível comprar um bom violão de nylon para iniciantes 
                    na faixa dos R$ 300,00 a R$ 500,00 (você não precisa 
                    investir caro logo de início, aprenda primeiro a 
                    tocar coisas simples com um violão de estudo e 
                    depois que você já estiver mais experiente, escolha um 
                    violão que atenda melhor seus novos desejos musicais).'

                    style={{ marginTop: '30px', paddingLeft: '50px', paddingRight: '50px', }}
                />

                <Text
                    title='Aprenda a segurar o violão'
                    text='Você pode apoiar o violão na perda direita ou na 
                    perna esquerda. Posicionar na perna esquerda é mais indicado 
                    para quem quer tocar música clássica, mas a maioria dos 
                    violonistas, principalmente quem toca música popular, 
                    segura o violão na perda direita, deixando-o levemente 
                    inclinado para permitir uma boa postura das duas mãos.'

                    style={{ marginTop: '30px', paddingLeft: '50px', paddingRight: '50px', }}
                />

                <Text
                    title='cordas do violão'
                    text={<div>
                    <p>Sobre a numeração das cordas do violão, o certo é 
                    contar de baixo para cima (a corda mais aguda é a 
                    primeira e a corda mais grave é a 6ª). A nota 
                    de cada corda é a seguinte:</p>
                    <p>1ª corda: mi</p>
                    <p>2ª corda: si</p>
                    <p>3ª corda: sol</p>
                    <p>4ª corda: ré</p>
                    <p>5ª corda: lá</p>
                    <p>6ª corda: mi</p>
                    </div>}

                    style={{ marginTop: '30px', paddingLeft: '50px', paddingRight: '50px', }}
                />



            </div>
            <FooterHome />
        </div>
    )
}