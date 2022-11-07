import { Link } from "react-router-dom";
import { FiCheckSquare, FiHome, FiMoreHorizontal, FiMusic } from 'react-icons/fi';
import { FaDog } from 'react-icons/fa'

import '../styles/Footer.css'


export function FooterHome(){

    return(
        <div className="FooterMain">
            <Link to='/' style={{ color: '#24387B' }}> <FiHome /> </Link>
            <Link to='/lessons'> <FiCheckSquare /> </Link>
            <Link to='/music'> <FiMusic /> </Link>
            <Link to='/dog'> <FaDog /> </Link>
            <Link to='/more'> <FiMoreHorizontal /> </Link>
        </div>
    )
}

export function FooterLessons() {
    return (
        <div className="FooterMain">
            <Link to='/'> <FiHome /> </Link>
            <Link to='/lessons' style={{ color:'#24387B'}}> <FiCheckSquare /> </Link>
            <Link to='/music'> <FiMusic /> </Link>
            <Link to='/dog'> <FaDog /> </Link>
            <Link to='/more'> <FiMoreHorizontal /> </Link>

        </div>
    )
}

export function FooterMusic() {
    return (
        <div className="FooterMain">
            <Link to='/'> <FiHome /> </Link>
            <Link to='/lessons'> <FiCheckSquare /> </Link>
            <Link to='/music' style={{ color: '#24387B' }}> <FiMusic /> </Link>
            <Link to='/dog'> <FaDog /> </Link>
            <Link to='/more'> <FiMoreHorizontal /> </Link>

        </div>
    )
}

export function FooterMore() {
    return (
        <div className="FooterMain">
            <Link to='/'> <FiHome /> </Link>
            <Link to='/lessons'> <FiCheckSquare /> </Link>
            <Link to='/music'> <FiMusic /> </Link>
            <Link to='/Dog'> <FaDog /> </Link>
            <Link to='/more' style={{ color: '#24387B' }}> <FiMoreHorizontal /> </Link>

        </div>
    )
}

export function FooterDog() {
    return (
        <div className="FooterMain">
            <Link to='/'> <FiHome /> </Link>
            <Link to='/lessons'> <FiCheckSquare /> </Link>
            <Link to='/music'> <FiMusic /> </Link>
            <Link to='/dog' style={{ color: '#24387B' }}> <FaDog /> </Link>
            <Link to='/more'> <FiMoreHorizontal /> </Link>

        </div>
    )
}