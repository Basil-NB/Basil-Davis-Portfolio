import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import basil from '../images/IMG-0374.PNG'

const Header = () => {
  return (
    <header className="header">
      <div className='tag'>
        <img src={basil} alt="header image" />
      </div>
      <div className='buttons'>
        <Link to="/" id='btn1'>About Me</Link>
        <Link to="/portfolio" id='btn2'>Portfolio</Link>
        <Link to="/contact" id='btn3'>Contact Me</Link>
        <Link to="/Resume" id='btn4'>Resume</Link>
      </div>
    </header>
  );
};

export default Header;