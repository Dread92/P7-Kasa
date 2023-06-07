import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";


 export function ApartmentCard() {
  return (
    <Link to ="/apartments">
    <div className='apartment'>
        
        <div className='apartment__title'>Titre de la location</div>
       
        </div>
        </Link>
  )
}

