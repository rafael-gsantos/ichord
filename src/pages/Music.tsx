import { FooterMusic } from "../components/Footer";
import { Header } from "../components/Header";
import { Spotify } from "../components/Spotify";

import '../styles/Music.css'

export function Music(){
    return (
        <div>
            <Header />
            <div className="MusicMain">
                <Spotify tipo='album' link='1zwEN9cLtWg39zFJnj8brt'/>
                <Spotify tipo='playlist' link='37i9dQZF1EIe0d7rIsZsNP' />
                <Spotify tipo='album' link='1v4O55JGou3T0Vlj06fdXz' />
                <Spotify tipo='playlist' link='37i9dQZF1DZ06evO1fXGqk' />

                <Spotify tipo='album' link='1zwEN9cLtWg39zFJnj8brt' />
                <Spotify tipo='playlist' link='37i9dQZF1EIe0d7rIsZsNP' />
                <Spotify tipo='album' link='1v4O55JGou3T0Vlj06fdXz' />
                <Spotify tipo='playlist' link='37i9dQZF1DZ06evO1fXGqk' />

            </div>
            <FooterMusic />
        </div>
    )
}