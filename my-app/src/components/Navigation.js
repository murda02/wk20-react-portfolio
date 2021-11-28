//src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom'


function Navigation() {

  

  var navStyle = {
    float: 'right',
    fontSize: '2rem', 
    color: '#faab6e', 
    display: 'inline',
    paddingRight: '3%',
    paddingTop: '1.9%'
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
      <NavLink to="/resume" style={linkStyle}>Resume</NavLink>
      {/* <a href={pdf} target="_blank" style={linkStyle} rel="noopener noreferrer">Resume</a> */}
    </nav>
  );
  }

export default Navigation;
