import { Link } from "react-router-dom"
import { Aula1Icon } from "../components/AulaIcon"
import { FooterHome } from "../components/Footer"
import { Header } from "../components/Header"

import '../styles/Home.css'

export function Home(){

    return(
        <div>
            <Header />
            <div className="HomeMain">
                <Link to='/aula1'>
                    <Aula1Icon />
                </Link>
            </div>
            <FooterHome />
        </div>
    )
}