import React, { useState } from "react";
import "./DropDown.scss";

function DropDown(props) {
  const [open, setOpen] = useState(false); // État local pour gérer la visibilité du contenu

  const toggleContentVisibility = () => {
    setOpen(!open); // Fonction pour inverser la visibilité du contenu lors du clic sur le titre
  };

  return (
    <div className="description__block">
      <p className={`description__title ${open ? "active" : ""}`} onClick={toggleContentVisibility}>
        <span>{props.title}</span> {/* Affichage du titre de la description*/}
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      {open && (
        <p className="description__content">{props.content}</p> // Affichage du contenu si la visibilité est activée
      )}
    </div>
  );
}

export default DropDown;
