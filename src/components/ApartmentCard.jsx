import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";


 export function ApartmentCard(props) {

  const state = {
   apartmentid:props.id
  };
  return (
    <Link
     to ="/apartments" 
     state = {{
      apartmentId: props.id
      }}>
    
    <div className='apartment'>
    <img src={props.imageApartments} alt=''/>
        <div className='apartment__title'>{props.title}</div>
        </div>
        </Link>
  )
}

