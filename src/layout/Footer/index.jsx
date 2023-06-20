import React from 'react';
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
    <div className='footer__logo'>
        <img src="logoblack.png" alt="logo"/>
    </div>
     <div className='footer__text'>
     © 2023 Kasa. All rights reserved
     </div>
    </div>
  )
}

export default Footer