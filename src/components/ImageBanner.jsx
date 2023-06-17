import React, { useState } from 'react';
import './ImageBanner.scss';

function ImageBanner(props) {
  const pictures = props.pictures;
  const [selectedPicture, setSelectedPicture] = useState(0);

  const getClassName = (i) => {
    if (i === selectedPicture) return 'show';
    return '';
  };


const moveToNext = () =>{
  setSelectedPicture((selectedPicture + 1) % pictures.length);
};

const moveToPrevious = () =>{
  const newSelectedPicture= selectedPicture -1 ;
  if (newSelectedPicture< 0){
    setSelectedPicture(pictures.length -1 )
    return;
  }


  setSelectedPicture((selectedPicture - 1) % pictures.length);
};


  return (
    <div className='banner__img'>
     
      <div className='image__container'>
      {pictures.map((pic, i) => (
        <img key={pic} src={pic} alt='' className={getClassName(i)} />
      ))}
      </div>
      < button onClick={moveToPrevious}>Previous</button>
      <button onClick={moveToNext}>Next</button>
       
    </div>
  );
}

export default ImageBanner;
