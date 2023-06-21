import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Basil's portfolio</h1>
      </div>
      <div className="nav-links">
        <button>about me</button>
        <button>portfolio</button>
        <button>resume</button>
        <button>contact me</button>
      </div>
    </header>
  );
};

export default Header;