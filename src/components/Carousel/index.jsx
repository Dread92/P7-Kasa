import React, { useState } from 'react';
import './ImageBanner.scss';

function ImageBanner(props) {
  const pictures = props.pictures; // Récupération de la propriété "pictures" à partir des props
  const [selectedPicture, setSelectedPicture] = useState(0); // État local pour suivre l'indice de l'image sélectionnée

  // Fonction pour déterminer la classe CSS en fonction de l'indice de l'image sélectionnée
  const getClassName = (i) => {
    if (i === selectedPicture) return 'show'; // La classe 'show' est appliquée si l'indice correspond à l'image sélectionnée
    return ''; // Aucune classe n'est appliquée sinon
  };

  // Fonction pour passer à l'image suivante
  const moveToNext = () => {
    setSelectedPicture((selectedPicture + 1) % pictures.length); // Sélectionne l'indice de l'image suivante en prenant en compte la boucle à la fin du tableau
  };

  // Fonction pour passer à l'image précédente
  const moveToPrevious = () => {
    const newSelectedPicture = selectedPicture - 1;
    if (newSelectedPicture < 0) {
      setSelectedPicture(pictures.length - 1); // Si l'indice devient négatif, sélectionne l'indice de la dernière image
      return;
    }
    setSelectedPicture(newSelectedPicture); // Sélectionne l'indice de l'image précédente
  };

  return (
    <div className='banner__img'>
      <div className='image__container'>
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt='' className={getClassName(i)} /> // Affiche chaque image et applique la classe CSS correspondante
        ))}
      </div>
      <button className='button button-previous' onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button> 
      <button className='button button-next' onClick={moveToNext}><i className="fas fa-chevron-right"></i></button> 
    </div>
  );
}

export default ImageBanner;
