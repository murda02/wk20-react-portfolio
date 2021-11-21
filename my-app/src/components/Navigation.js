//src/components/Navigation.js
import React from 'react';

function Navigation({ currentPage, handlePageChange}) {

  console.log("currentPage: ", currentPage);

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
      <a href="/about" 
      onClick={() => handlePageChange('About')}
      className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}
      style={linkStyle}>About Me | </a>

      <a href="/portfolio" style={linkStyle}>Portfolio | </a>

      <a href="/contact"
      onClick={() => handlePageChange('Contact')}
      className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'} 
      style={linkStyle}>Contact | </a>

      <a href="/resume" style={linkStyle}>Resume</a>
    </nav>
  );
  }

export default Navigation;
