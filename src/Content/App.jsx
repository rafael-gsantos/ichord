import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './Styles/Global.css'

import { Header } from './Header';

import { Home } from './Home'
import { More } from './More';
import { Exercicios } from './Exercicios';
import { Musicas } from './Musicas';
import { Aula1 } from './Aulas/Aula1/Aula1';
import { Intro } from './Aulas/Aula1/Intro';
import { Videos } from './Aulas/Aula1/Videos';
import { Quiz } from './Aulas/Aula1/Quiz'



export function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/More' element={<More />} />
          <Route path='/Aula1' element={<Aula1 />} />
          <Route path='/Exercicios' element={<Exercicios />} />
          <Route path='/Musicas' element={<Musicas />} />
          <Route path='/Aula1/Intro' element={<Intro />} />
          <Route path='/Aula1/Videos' element={<Videos />} />
          <Route path='/Quiz' element={<Quiz />} />



        </Routes>
      </Router>

    </div>
  );
}

