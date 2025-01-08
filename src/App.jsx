import './styles/globals.scss'
import { Routes, Route, Router } from 'react-router-dom';

import Home from './components/pages/home/Home.jsx';
import Amigurumis from './components/pages/amigurumis/Amigurumis.jsx';
import Keyrings from './components/pages/keyrings/Keyrings.jsx';
import Tops from './components/pages/tops/Tops.jsx'
import Gifts from './components/pages/gifts/Gifts.jsx'
import About from './components/pages/about/About.jsx'
import ScrollToTop from './components/pages/ScrollToTop/ScrollToTop.js';



function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/amigurumis' element={<Amigurumis/>}/>
        <Route path='/keyrings' element={<Keyrings/>}/>
        <Route path='/tops' element={<Tops/>}/>
        <Route path='/gifts' element={<Gifts/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <a href="https://wa.me/50689742305" className="btn btn-success whatsapp-icon" target="_blank">
        <i className="fab fa-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
        </i>
      </a>
    </>
  )
}

export default App;
