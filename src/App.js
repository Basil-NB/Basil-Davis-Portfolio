import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import About from './components/AboutMe';
import ContactMe from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}



export default App;