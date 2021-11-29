//src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom'


function Navigation() {

  var navStyle = {
    float: 'right',
    color: '#faab6e', 
    paddingRight: '3%',
    paddingTop: '1.6%'
  }
  
  var linkStyle = {
    color: '#faab6e',
    textDecoration: 'none'
  }

  const css = `@media (min-width: 320px) {
    nav {
      font-size: 1.3rem; 
      display: inline-grid;
        
    }
  }
  @media (min-width: 768px) {
    nav {
      font-size: 1.3rem; 
      display: inline;
  }
  @media (min-width: 1200px) {
    nav {
      font-size: 2rem; 
      display: inline;
  }
  }`;
  

  return (
    <nav style={navStyle}>
      <style scoped>{css}</style>
      <NavLink to="/" style={linkStyle}>About Me | </NavLink>
      <NavLink to="/portfolio" style={linkStyle}>Portfolio | </NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact | </NavLink>
      <NavLink to="/resume" style={linkStyle}>Resume</NavLink>
      {/* <a href={pdf} target="_blank" style={linkStyle} rel="noopener noreferrer">Resume</a> */}
    </nav>
  );
  }

export default Navigation;
