import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle  from './Globalstyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const {createProxyMiddleware} = require('http-proxy-middleware');
import Error from './components/error';
const App = () => {


  return (
    <div>
    <GlobalStyle/>
    <BrowserRouter>
    <Navbar/>
   <Routes>
       <Route excat path="/" element={<Home />}/> 
       <Route excat path="/About" element={<About />} /> 
       <Route excat path="/Service" element={<Service/>} />
       <Route excat path="/Skill" element={<Skill />} />
       <Route excat path="/Contact" element={<Contact/>} />
       <Route excat path="*" element={<Error/>} />

   </Routes>
   <Footer/>
   </BrowserRouter>

    </div>
  )
}

export default App 

