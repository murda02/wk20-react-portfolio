// src/components/Header.js

import React from "react";
import banner from './assets/img/banner.jpg'
import banner2 from './assets/img/banner.png'
import Navigation from "./Navigation";

function Header() {

var nameStyle = {
  position: 'relative', 
  bottom: '-10%',
  fontSize: '4rem', 
  color: '#faab6e', 
  display: 'inline',
  left: '2%'
}

var headerStyle = {
  position: "relative",
  backgroundImage: `url(${banner2})`,
  minHeight: '18.8vh', 
  minWidth: '100vw'
}

  return (
    <header style={headerStyle}>
      <h1 style={nameStyle}>Dave Murphy</h1>
      <Navigation />
    </header>
  );
}

export default Header;
