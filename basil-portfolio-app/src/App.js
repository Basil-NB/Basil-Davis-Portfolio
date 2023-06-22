import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import About from './components/AboutMe';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;