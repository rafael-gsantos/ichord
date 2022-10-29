import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/Navbar.css'

export function Navbar(){
    return(
        <div className='mainNavbar'>
            <Link to={'/'}> <span class="material-symbols-outlined"> home </span></Link>
            <Link to={'/Exercicios'}> <span class="material-symbols-outlined"> edit_note </span></Link>
            <Link to={'/Musicas'}> <span class="material-symbols-outlined"> music_note </span></Link>
            <Link to={'/More'}> <span class="material-symbols-outlined"> more_horiz </span></Link>



        </div>
    )
}