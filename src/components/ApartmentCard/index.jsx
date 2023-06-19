import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

// Composant représentant une carte d'appartement
export function ApartmentCard(props) {

  const state = {
    apartmentid: props.id // Identifiant de l'appartement
  };

  return (
    <Link
      to="/apartments" // Lien de redirection vers la page des appartements
      state={{
        apartmentId: props.id // Passage de l'identifiant de l'appartement en tant que paramètre de l'état
      }}
    >
      <div className='apartment'> 
        <img src={props.imageApartments} alt=''/> 
        <div className='apartment__title'>{props.title}</div> 
      </div>
    </Link>
  )
}
