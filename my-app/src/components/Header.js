// src/components/Header.js

import React from "react";
import banner from './assets/img/banner.jpg'

function Header() {
  return (
    <header>
      <h1 style={{position: 'left', fontSize: '80px', top: 200, color: '#faab6e'}}>Dave Murphy</h1>
      <img src={banner} alt="Binary" style={{width: '100%'}}/>
    </header>
  );
}

export default Header;
