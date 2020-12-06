import React from 'react';
import gamePic from '../assets/img/logo.png';
function Header() {
  return (
    <div className="header">
      <div className="game-picture">
        <img src={gamePic} alt="game logo" />
      </div>
      <div className="game-name">
        <h2>Четыре в ряд</h2>
      </div>
    </div>
  );
}

export default Header;
