/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import api from '../api'
import { FooterDog } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/Home.css'


class Dog extends Component {

    state = {
        caes: [],
    }


    async componentDidMount() {
        const response = await api.get('')

        this.setState({ caes: response.data.message })
    }


    render() {
        const { caes } = this.state;

        return (
            <div className='HomeMain' >
                <Header />
                <div style={{ display: 'flex',flexDirection: 'column' , justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>

                    <h1>Um cachorro para alegrar seu dia</h1>
                    <div
                    style={{
                        marginTop: '10px',
                        height: '256px',
                        width: '256px',
                        backgroundImage: `url(${caes})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                    ></div>
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        marginTop: '10px',
                    }}>
                        <p>utilizado a api do </p>
                        <a href="https://dog.ceo/" style={{ color: '#CAD7FF'}}>dog.ceo</a>
                    </div>
                </div>

                <FooterDog />
            </div>
        )
    }
}

export default Dog