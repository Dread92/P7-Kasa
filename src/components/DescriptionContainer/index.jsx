import React, { useState } from "react";
import "./DescriptionContainer.scss";

function DescriptionContainer(props) {
  const [isContentVisible, setIsContentVisible] = useState(false); // État local pour gérer la visibilité du contenu

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible); // Fonction pour inverser la visibilité du contenu lors du clic sur le titre
  };

  return (
    <div className="description__block">
      <p className={`description__title ${isContentVisible ? "active" : ""}`} onClick={toggleContentVisibility}>
        <span>{props.title}</span> {/* Affichage du titre de la description*/}
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      {isContentVisible && (
        <p className="description__content">{props.content}</p> // Affichage du contenu si la visibilité est activée
      )}
    </div>
  );
}

export default DescriptionContainer;
