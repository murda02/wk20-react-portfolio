// src/components/Header.js

import React from "react";
import banner from './assets/img/banner.png'
import Navigation from "./Navigation";

function Header() {

var nameStyle = {
  position: 'relative', 
  bottom: '-10%',
  color: '#faab6e', 
  display: 'inline',
  left: '2%'
}

var headerStyle = {
  position: "relative",
  backgroundImage: `url(${banner})`,
  minHeight: '16.8vh',
  maxHeight: '16.8vh', 
  minWidth: '100vw'
}

const css = `@media (min-width: 320px) {
  h1 {
    font-size: 2rem; 
      
  }
}
@media (min-width: 768px) {
  h1 {
    font-size: 3rem; 
}
@media (min-width: 1200px) {
  h1 {
    font-size: 4rem; 
}
}`;

  return (
    <header style={headerStyle}>
      <style scoped>{css}</style>
      <h1 style={nameStyle}>Dave Murphy</h1>
      <Navigation />
    </header>
  );
}

export default Header;
