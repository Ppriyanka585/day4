import React from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import NavBar1 from './components/NavBar1.jsx'

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';



export default function App () {
  return (
    <div> 
      <NavBar1/>
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
       </Routes>
       </Container>
    </div>
  )
}

