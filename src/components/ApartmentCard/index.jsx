import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

// Composant représentant une carte d'appartement
export function ApartmentCard(props) {

  const {id, imageApartments, title} = props;

  return (
    <Link
      to="/apartments" // Lien de redirection vers la page des appartements
      state={{
        apartmentId: id // Passage de l'identifiant de l'appartement en tant que paramètre de l'état
      }}
    >
      <div className='apartment'> 
        <img src={imageApartments} alt={title}/> 
        <div className='apartment__title'>{title}</div> 
      </div>
    </Link>
  )
}
