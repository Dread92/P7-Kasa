import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";



function Navbar() {

  


  return (
    <nav className="navbar">
    <div className='navbar__logo'>
      <img src ="logokasa.png" alt="Logo" />
    </div>
    <NavLink to ="/">
    <div>Accueil</div>
    </NavLink>
    <NavLink to ="/about">
    <div>A propos</div>
    </NavLink>
    </nav>
  )
}

export default Navbar