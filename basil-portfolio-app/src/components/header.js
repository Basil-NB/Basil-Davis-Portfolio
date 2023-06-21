import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1 className="m-0">Basil's portfolio</h1>
      </div>
    </header>
  );
};

export default Header;