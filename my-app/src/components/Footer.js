//src/compents/Footer.js

//src/components/Navigation.js
import React from 'react';
import github from "./assets/img/github.png"
import linkedin from './assets/img/linkedIn.png'

function Footer() {
  var footerStyle = {
    width: '25%',
    display: 'inline',
    paddingTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  var footerImgStyle = {
    padding: '1%',
  }

  return (
    <footer style={footerStyle}>
      <a href={'https://www.github.com/murda02'} 
      style={footerImgStyle} 
      target="_blank" 
      rel="noopener noreferrer">
      <img src={github} alt='github icon'></img>
      </a>
      <a href={'https://www.linkedin.com/in/-dave-murphy/'} 
      style={footerImgStyle} 
      target="_blank" 
      rel="noopener noreferrer">
      <img src={linkedin} alt='linkedIn icon'></img>
      </a>
    </footer>
  );
  }

export default Footer;