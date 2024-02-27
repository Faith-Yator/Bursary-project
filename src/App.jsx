import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';
import About from './pages/About';
import Application from './pages/Application';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/application" element={<Application />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;