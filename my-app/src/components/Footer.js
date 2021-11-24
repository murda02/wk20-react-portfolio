//src/compents/Footer.js

//src/components/Navigation.js
import React from 'react';
import github from "./assets/img/github.png"

function Footer() {

  

  var footStyle = {
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
    <nav style={footStyle}>
      <a href={'https://www.github.com'} target="_blank" rel="noopener noreferrer">
          <img src={github}></img>
      </a>
    </nav>
  );
  }

export default Footer;