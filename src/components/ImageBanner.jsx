import React from 'react'
import './ImageBanner.scss'


 function ImageBanner(props) {
  return (
    <div className='banner__img'>
    <img src={props.imageUrl} alt=""/>
</div>
  );
}

export default ImageBanner