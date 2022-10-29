import React from 'react';

import './Styles/Header.css'

import Logo from './Img/Logo.svg'

export const Header = () => {
    return(
        <div className='mainHeader'>
            <img src={Logo} alt="Logo" />
        </div>
    );
};