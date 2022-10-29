import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

import '../../styles/Aula1.css'

import { FooterHome } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Aula1Icon } from "../../components/AulaIcon"
import { Button } from '../../components/Button';


export function Aula1(){
    return(
        <div>
            <Header />

            <div className="Aula1Main">
                <Link to='/'>
                    <IoIosCloseCircleOutline style={{fontSize: '40px', position: 'fixed', left:'0', paddingLeft:'10px'}}/>
                </Link>
                <Aula1Icon />
                <p>4 AULAS</p>

                <Link to='/aula1/intro'><Button text='introdução'/></Link>
                <Link to='/aula1/videos'><Button text='videos'/></Link>
                <Link to='/aula1/quiz'><Button text='quiz'/></Link>

            </div>

            <FooterHome />
        </div>
    )
}