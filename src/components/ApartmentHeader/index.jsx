import React from 'react';
import './ApartmentHeader.scss';

export function ApartmentHeader(props) {
  const { apartment } = props; // Récupération de la propriété "apartment" à partir des props
  const name = apartment.host.name; // Récupération du nom du propriétaire de l'appartement
  const [firstName, lastName] = name.split(" "); /* divise le nom complet en prénom et nom de famille en utilisant la méthode split avec un espace comme séparateur. 
  Les variables firstName et lastName sont assignées aux valeurs correspondantes.*/
 
  return (

    <div className='apartment__header'>
      <div className='apartment__title'>
        <h1 className='apartment-page__title'>{props.apartment.title}</h1> {/* Affichage du titre de l'appartement*/}
        <h2 className='apartment-page__subtitle'>{props.apartment.location}</h2> {/* Affichage de l'emplacement de l'appartement*/}
        <div className='apartment__tags'>
          {props.apartment.tags.map((tag, index) => (//La méthode map est utilisée pour itérer sur le tableau props.apartment.tags, et pour chaque tag, un élément span est rendu pour afficher le contenu du tag.
            <span key={index}>{tag}</span> //Affichage de chaque tag associé à l'appartement
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
          {[1, 2, 3, 4, 5].map((number) => (/*La méthode map est utilisée pour itérer sur un tableau contenant les chiffres de 1 à 5. 
          Pour chaque chiffre, un élément span est rendu avec un attribut key défini sur le chiffre en cours.
           La classe className est conditionnellement définie sur "filled" si props.apartment.rating est supérieur ou égal au chiffre en cours, indiquant une étoile remplie. */
            <span key={number} className={props.apartment.rating >= number ? "filled" : ""}>★</span> // Affichage d'une étoile remplie ou vide en fonction de la note du propriétaire
          ))}
        </div>
      </div>
    </div>
  );
}
