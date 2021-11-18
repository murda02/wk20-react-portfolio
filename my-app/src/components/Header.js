// src/components/Header.js

import React from "react";
import banner from './assets/img/banner.jpg'
import Navigation from "./Navigation";

function Header() {

var nameStyle = {
  position: "relative", 
  fontSize: '4rem', 
  color: '#faab6e', 
  display: 'inline',
  lineHeight: '719%',
  left: '2%'
}

  return (
    <header style={{backgroundImage: `url(${banner})`, minHeight: '45vh', minWidth: '100vw', backgroundRepeat: 'no-repeat' }}>
      <h1 style={nameStyle}>Dave Murphy</h1>
      <Navigation />
    </header>
  );
}

export default Header;
