//src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom'
import pdf from "./assets/DMurphy_Resume.pdf"

function Navigation() {

  

  var navStyle = {
    position: "relative", 
    left: "15%", 
    fontSize: '2rem', 
    color: '#faab6e', 
    display: 'inline'
  }
  var linkStyle = {
    color: '#faab6e',
    textDecoration: 'none'
  }

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>About Me | </NavLink>
      <NavLink to="/portfolio" style={linkStyle}>Portfolio | </NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact | </NavLink>
      <a href={pdf} target="_blank" style={linkStyle} rel="noopener noreferrer">Resume</a>
    </nav>
  );
  }

export default Navigation;
