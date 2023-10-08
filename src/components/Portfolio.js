import React from 'react';
import '../App.css';

import art from '../images/art dealer Logo.png';
import pets from '../images/paws plus.jpeg';
import hive from '../images/health hive.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <a href='https://nameless-springs-87426-ab7084b2cd1d.herokuapp.com/' className='card'>
        <img src={art} alt="Offres D'art" />
        <p className="description">Description for Offres D'art</p>
      </a>
      <a href='https://molyneauxk93.github.io/PawsPlus-/' className='card'>
        <img src={pets} alt="Paws +" />
        <p className="description">Description for Paws +</p>
      </a>
      <a href='https://www.example.com/link-for-hive' className='card'>
        <img src={hive} alt="Health Hive" />
        <p className="description">Description for Health Hive</p>
      </a>
    </div>
  );
};

export default Portfolio;