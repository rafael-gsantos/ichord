/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaWhatsapp, FaPhone, FaMailBulk, FaMapMarkerAlt, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import { FooterMore } from "../components/Footer";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

import '../styles/More.css'

export function More(props: any) {
    return (
        <div>
            <Header />
            <div className="MoreMain">
                <Text 
                    title='SOBRE NOS'
                    text='Em mais de 20 anos, a Daccord se como o maior catálogo 
                    em produtos de tecnologia musical para Músicos, Compositores, 
                    Instrumentistas, Produtores, Djs, Professores e Instituições 
                    de Ensino. Se você curte música e tecnologia, temos muito a conversar!'
                />

                <Text title='ONDE NOS ENCONTRAR'/>

                <div className='MoreLinks'>
                    <a href="https://wa.me/5581995251239" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="tel:+55 (81) 41020011" target="_blank" rel="noreferrer">
                        <FaPhone />
                    </a>
                    <a href="mailto:daccord@daccord.com.br" target="_blank" rel="noreferrer">
                        <FaMailBulk />
                    </a>
                    <a href="https://goo.gl/maps/sZsdzxTD9rQegA679" target="_blank" rel="noreferrer">
                        <FaMapMarkerAlt />
                    </a>
                </div>

                <Text title='NOS SIGA'/>
                <div className='MoreLinks'>
                    <a href="https://instagram.com/daccord.music">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/116638808413163" target="_blank" rel="noreferrer">
                        <FaFacebookSquare />
                    </a>
                </div>

            </div>
            <FooterMore />
        </div>
    )
}