import React, { useState } from 'react';
import './Carousel.scss';
//imports the necessary dependencies: the React library and the CSS file for styling the carousel component.

function Carousel(props) { //composant fonctionnel nommé Carousel qui accepte props en tant que paramètre.
  //Ici, la prop pictures passée au composant est stockée dans une variable locale pictures. 
  //Le hook useState est utilisé pour créer une variable d'état selectedPicture et une fonction de modification correspondante setSelectedPicture.
  // La valeur initiale de selectedPicture est définie sur 0.
  const pictures = props.pictures;
  const [selectedPicture, setSelectedPicture] = useState(0);
//Cette fonction getClassName prend un index i en paramètre et renvoie le nom de classe CSS 'show' si i correspond à la valeur de l'état selectedPicture.
// Sinon, elle renvoie une chaîne vide.
  const getClassName = (i) => {
    if (i === selectedPicture) return 'show';
    return '';
  };
//Cette fonction moveToNext est appelée lorsque le bouton "Suivant" est cliqué. Elle met à jour l'état selectedPicture en l'incrémentant de 1. 
//Si la nouvelle valeur dépasse la longueur du tableau pictures, elle revient à la première image en utilisant l'opérateur modulo %.
  const moveToNext = () => {
    setSelectedPicture((selectedPicture + 1) % pictures.length);
  };
//Cette fonction moveToPrevious est appelée lorsque le bouton "Précédent" est cliqué. Elle met à jour l'état selectedPicture en le décrémentant de 1. 
//Si la nouvelle valeur est inférieure à 0, elle revient à la dernière image en définissant selectedPicture sur pictures.length - 1.
  const moveToPrevious = () => {
    const newSelectedPicture = selectedPicture - 1;
    if (newSelectedPicture < 0) {
      setSelectedPicture(pictures.length - 1);
      return;
    }
    setSelectedPicture(newSelectedPicture);
  };

  //Cela crée une chaîne imageCounter qui représente l'index de l'image actuelle plus un (selectedPicture + 1) et le nombre total d'images (pictures.length).
  // Elle est utilisée pour afficher le compteur d'images actuel.
  const imageCounter = `${selectedPicture + 1}/${pictures.length}`; 

  return (
    <div className='banner__img'>
      <div className='image__container'> {/* Une balise <img> pour chaque image du tableau pictures,
       avec une classe CSS définie dynamiquement à l'aide de getClassName(i) pour contrôler la visibilité en fonction de l'état selectedPicture. */}
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt='apartment image' className={getClassName(i)} />
        ))}
      </div>
      <div className='image__counter'>{imageCounter}</div> {/* Display the image counter */}
{/*Des boutons "Précédent" et "Suivant" qui déclenchent les fonctions moveToPrevious et moveToNext respectivement lorsqu'ils sont cliqués.*/}      
      <button className='button button-previous' onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button>
      <button className='button button-next' onClick={moveToNext}><i className="fas fa-chevron-right"></i></button>
    </div>
  );
}

export default Carousel;
