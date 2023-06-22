import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Basil's portfolio</h1>
      <div className='buttons'>
        <button id='btn1'>about me</button>
        <button id='btn2'>portfolio</button>
        <button id='btn3'>resume</button>
        <button id='btn4'>contact me</button>
      </div>
    </header>
  );
};

export default Header;