//src/components/Navigation.js

import React from "react";

function Navigation() {

  var navStyle = {
    position: "relative", 
    left: "17%", 
    fontSize: '2rem', 
    color: '#faab6e', 
    display: 'inline'
  }
  var linkStyle = {
    color: '#faab6e',
    textDecoration: 'none'
  }
//on hover does not exist
  return (
    <nav style={navStyle}>
      <a href="/about" style={linkStyle}>About Me | </a>
      <a href="/work" style={linkStyle}>Work | </a>
      <a href="/contact" style={linkStyle}>Contact | </a>
      <a href="/resume" style={linkStyle}>Resume</a>
    </nav>
  );
  }

export default Navigation;
