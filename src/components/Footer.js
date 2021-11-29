
import React from 'react';
import github from "./assets/img/github.png"
import linkedin from './assets/img/linkedIn.png'

function Footer() {
  var footerStyle = {
    display: "flex", 
    justifyContent:"center",
    bottom: 0
  }
  var footerImgStyle = {
    padding: '3%',
    width: '90%'
  }

  return (
    <footer style={footerStyle}>
      <a href={'https://www.github.com/murda02'} 
      target="_blank" 
      rel="noopener noreferrer">
      <img src={github} alt='github icon' style={footerImgStyle} ></img>
      </a>
      <a href={'https://www.linkedin.com/in/-dave-murphy/'} 
      target="_blank" 
      rel="noopener noreferrer">
      <img src={linkedin} alt='linkedIn icon' style={footerImgStyle} ></img>
      </a>
    </footer>
  );
  }

export default Footer;