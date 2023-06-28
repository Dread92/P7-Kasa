import React, { useState } from 'react';
import './ImageBanner.scss';

function ImageBanner(props) {
  const pictures = props.pictures;
  const [selectedPicture, setSelectedPicture] = useState(0);

  const getClassName = (i) => {
    if (i === selectedPicture) return 'show';
    return '';
  };

  const moveToNext = () => {
    setSelectedPicture((selectedPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newSelectedPicture = selectedPicture - 1;
    if (newSelectedPicture < 0) {
      setSelectedPicture(pictures.length - 1);
      return;
    }
    setSelectedPicture(newSelectedPicture);
  };

  const imageCounter = `${selectedPicture + 1}/${pictures.length}`; // Calculate the image counter string

  return (
    <div className='banner__img'>
      <div className='image__container'>
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt='' className={getClassName(i)} />
        ))}
      </div>
      <div className='image__counter'>{imageCounter}</div> {/* Display the image counter */}
      <button className='button button-previous' onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button>
      <button className='button button-next' onClick={moveToNext}><i className="fas fa-chevron-right"></i></button>
    </div>
  );
}

export default ImageBanner;
