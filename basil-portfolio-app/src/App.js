import React from 'react';
import './App.css';

import Resume from './pages/Resume';
import contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import aboutMe from './pages/AboutMe';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <aboutMe />,
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;