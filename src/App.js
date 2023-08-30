import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';  
import Projects from './pages/Menu'; 

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/Projects' element={<Projects />} /> 
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;

