import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'


import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;