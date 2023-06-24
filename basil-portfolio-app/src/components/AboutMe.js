import React from 'react';
import '../App.css';

import profilePicture from '../images/IMG_0371.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='pfp-card'>
      <img src={profilePicture} alt="Profile Picture" />
        <h2>Hello! My name is Basil.</h2>
      </div>
      <div className='about-p'>
        <p>Hello. My name is Basil this is my portfolio i am a full stack junior dev graduate from uconn coding bootcamp! I am hard working, determend, and a great problem solver! I also have proficiant knolage in html, css, JavaScript, and MERN! Thank you for visiting my portfolio.</p>
      </div>
    </div>
  );
};

export default About;