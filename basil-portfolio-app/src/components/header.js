import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Basil's portfolio</h1>
      <div className='buttons'>
        <Link to="/" id='btn1'>About Me</Link>
        <Link to="/Portfolio" id='btn2'>Portfolio</Link>
        <Link to="/Contact" id='btn4'>Contact Me</Link>
        <Link to="/Resume" id='btn4'>Contact Me</Link>
      </div>
    </header>
  );
};

export default Header;