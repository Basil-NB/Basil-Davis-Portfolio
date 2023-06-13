import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navBar">
          <div className="header">Basil Davis</div>
          <a href="/Portfolio.js">Portfolio</a>
          <a href="/AboutMe.js">About Me</a>
          <a href="/Resume.js">Resume</a>
          <a href="/Contact.js">Contact</a>
        </div>

      <div className="welcome">
        <h2>Welcome to my Portfolio</h2>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </div>

      <footer>
        <div>GitHub</div>
        <div>LinkedIn</div>
      </footer>
    </div>
  );
}

export default App;