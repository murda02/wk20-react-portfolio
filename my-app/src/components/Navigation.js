//src/components/Navigation.js

import React from "react";

function Navigation({ currentPage, handlePageChnage}) {

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
    <nav 
    className='click-nav'
    style={navStyle}>
      <a href="/about" 
      style={linkStyle}>
        onClick={() => handlePageChnage("About")}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        About Me | </a>
      {/* <a href="/portfolio" style={linkStyle}>Portfolio | </a>
      <a href="/contact" style={linkStyle}>Contact | </a>
      <a href="/resume" style={linkStyle}>Resume</a> */}
    </nav>
  );
  }

export default Navigation;
