import { Button } from "../components/Button";
import { FooterLessons } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/Lessons.css'

export function Lessons(props: any){
    return(
        <div>
            <Header />
            <div className="LessonsMain">
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 1'/></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 2' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 3' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 4' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 5' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 6' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 7' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 8' /></a>
                <a href='https://drive.google.com/file/d/1BWXCjIUHgIMZSrev8dVvV9v-Mdsf0ZD4/view?usp=sharing' target="_blank" rel="noreferrer"><Button text='exercícios modulo 9' /></a>
            </div>
            <FooterLessons />
        </div>
    )
}