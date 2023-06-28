import React from 'react';
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logokasa from '../../assets/logokasa.png';


function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className='navbar__logo'>
          <img src ={logokasa} alt="Logo" className='logo' /> 
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div> 
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div> 
      </NavLink>
    </nav>
  )
}

export default Navbar;
