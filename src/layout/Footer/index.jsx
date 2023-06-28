import React from 'react';
import "./Footer.scss";
import logoblack from '../../assets/logoblack.png';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={logoblack} alt="logo" />
      </div>
      <div className='footer__text'>
        © 2023 Kasa. All rights reserved
      </div>
    </div>
  )
}

export default Footer