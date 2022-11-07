import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Aula1 } from './pages/aulas/Aula1';
import { Intro1 } from './pages/aulas/Intro1';
import { Quiz1 } from './pages/aulas/Quiz1';
import { Video1 } from './pages/aulas/Video1';
import Dog from './pages/Dog';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { More } from './pages/More';
import { Music } from './pages/Music';

export function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={ <Home /> }/>
        <Route path='/lessons' element={<Lessons />} />
        <Route path='/music' element={<Music />} />
        <Route path='/more' element={<More />} />
        <Route path='/aula1' element={<Aula1 />} />
        <Route path='/aula1/intro' element={<Intro1 />} />
        <Route path='/aula1/videos' element={<Video1 />} />
        <Route path='/aula1/quiz' element={<Quiz1 />} />
        <Route path='/Dog' element={<Dog />} />
      </Routes>
    </Router>
  );
}