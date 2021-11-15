// src/components/Header.js

import React from "react";
import mountain_view_dlm from './assets/img/mountain_view_dlm.jpg'

function Header() {
  return (
    <header>
      <h1 style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>Dave Murphy</h1>
      <img src={mountain_view_dlm} alt="Rocky Mountains" style={{width: '100%'}}/>
    </header>
  );
}

export default Header;
