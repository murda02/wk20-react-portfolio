// src/components/Header.js

import React from "react";
import banner from './assets/img/banner.jpg'
import Navigation from "./Navigation";

function Header() {

var nameStyle = {
  position: 'absolute', 
  bottom: '-10%',
  fontSize: '4rem', 
  color: '#faab6e', 
  display: 'inline',
  left: '2%'
}

var headerStyle = {
  position: "relative",
  backgroundImage: `url(${banner})`,
  minHeight: '26vh', 
  minWidth: '100vw', 
  backgroundRepeat: 'no-repeat' 
}

  return (
    <header style={headerStyle}>
      <h1 style={nameStyle}>Dave Murphy</h1>
      <Navigation />
    </header>
  );
}

export default Header;
