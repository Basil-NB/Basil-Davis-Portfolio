import React from 'react';
import '../App.css';

import art from '../images/art dealer Logo.png';
import pets from '../images/paws plus.jpeg';
import hive from '../images/health hive.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='card'>
        <img src={art} alt="Offres D'art" />
        <p className="description">Description for Offres D'art</p>
      </div>
      <div className='card'>
        <img src={pets} alt="Paws +" />
        <p className="description">Description for Paws +</p>
      </div>
      <div className='card'>
        <img src={hive} alt="Health Hive" />
        <p className="description">Description for Health Hive</p>
      </div>
    </div>
  );
};

export default Portfolio;