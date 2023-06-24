import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
// import About from './components/AboutMe';
// import ContactMe from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* <About /> */}
        {/* <ContactMe /> */}
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;