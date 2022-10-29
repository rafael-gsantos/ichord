// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/Aulas.css'
import { Navbar } from './Navbar';

function Spotify(props) {
    if (props.tipo === 'track'){
        return (
            <iframe src={`https://open.spotify.com/embed/track/${ props.link }?utm_source=generator`} width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    
        )
    }
    else if (props.tipo === 'album'){
        return(
            <iframe src={`https://open.spotify.com/embed/album/${ props.link }?utm_source=generator`} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        )
    }
}


export function Musicas() {
    return (
        <div className='mainAulas'>



            <Spotify 
                tipo="album"
                link="1v4O55JGou3T0Vlj06fdXz"
            />

            <Navbar />
        </div>
    )
}