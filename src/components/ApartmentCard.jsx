import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";


 export function ApartmentCard(props) {
  return (
    <Link to ="/apartments">
    
    <div className='apartment'>
    <img src={props.imageApartments} alt=''/>
        <div className='apartment__title'>{props.title}</div>
        </div>
        </Link>
  )
}

