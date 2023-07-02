import React from 'react';
import "./Banner.scss";

function Banner(props) {
  /* const {text, image, style,imageAlt }= props */
  return (
    <div className={`banner ${props.style}`}>
{/* Le rendu du composant commence par un élément div avec la classe CSS "banner" ainsi que la classe CSS spécifiée dans props.style. 
Ces classes sont utilisées pour styliser le composant de la bannière. */}

      <img src={props.image} alt={props.imageAlt} className="banner-image"></img>
      {props.text && <h2 className='banner-title'>{props.text}</h2>}
   {/*    Si props.text est défini, un élément h2 avec la classe CSS "banner-title" est rendu, affichant le texte spécifié dans props.text. 
      Cela permet d'afficher un titre dans la bannière si un texte est fourni. */}
    </div>
  )
}
// home page export
export default Banner


