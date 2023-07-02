import React, { useState } from "react";
import "./DropDown.scss";

function DropDown(props) {
  const [open, setOpen] = useState(false); /*  utilise le Hook useState pour créer une variable d'état locale appelée open. 
  La valeur initiale de open est définie sur false. La fonction setOpen est utilisée pour modifier la valeur de open. */
  const toggleContentVisibility = () => {
    setOpen(!open); // La fonction toggleContentVisibility est définie pour inverser la visibilité du contenu lorsqu'on clique sur le titre. Elle est appelée lorsque le titre est cliqué.
  };

  return (
    <div className="description__block">
      <p className={`description__title ${open ? "active" : ""}`} onClick={toggleContentVisibility}>
        {/* Si open est true, le contenu de la description est affiché à l'aide d'un élément p avec la classe CSS "description__content".
       Le contenu est obtenu à partir de props.content. */}
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
