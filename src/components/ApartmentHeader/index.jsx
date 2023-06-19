import React from 'react';
import './ApartmentHeader.scss';

export function ApartmentHeader(props) {
  const apartment = props.apartment; // Récupération de la propriété "apartment" à partir des props
  const name = apartment.host.name; // Récupération du nom du propriétaire de l'appartement
  const [firstName, lastName] = name.split(" "); // Découpage du nom complet en prénom et nom de famille

  return (
    <div className='apartment__header'>
      <div className='apartment__title'> 
        <h1 className='apartment-page__title'>{props.apartment.title}</h1> {/* Affichage du titre de l'appartement*/}
        <h2 className='apartment-page__subtitle'>{props.apartment.location}</h2> {/* Affichage de l'emplacement de l'appartement*/}
        <div className='apartment__tags'>
          {props.apartment.tags.map((tag) => (
            <span>{tag}</span> //Affichage de chaque tag associé à l'appartement
          ))}
        </div>
      </div>
      <div className='apartment__owner'> 
        <div className='apartment__owner__infos'> 
          <h3>
            <span>{firstName}</span> 
            <span>{lastName}</span> 
          </h3>
          <div className='apartment__owner__badge'>
            <img src={apartment.host.picture} alt="" />{ /* Affichage de l'image du propriétaire*/}
          </div>
        </div>
        <div className='apartment__owner__stars'> 
          {[1, 2, 3, 4, 5].map((number) => (
            <span key={number} className={props.apartment.rating >= number ? "filled" : ""}>★</span> // Affichage d'une étoile remplie ou vide en fonction de la note du propriétaire
          ))}
        </div>
      </div>
    </div>
  );
}
