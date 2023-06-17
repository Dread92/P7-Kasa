import React, { useState } from "react";
import "./DescriptionContainer.scss";

function DescriptionContainer(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="description__block">
      <p className={`description__title ${isContentVisible ? "active" : ""}`} onClick={toggleContentVisibility}>
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      {isContentVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
}

export default DescriptionContainer;
