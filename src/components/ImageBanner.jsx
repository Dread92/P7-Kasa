import React from 'react'
import './ImageBanner.scss'


export function ImageBanner(props) {
  return (
    <div className='banner__img'>
    <img src={props.imageUrl} alt=""/>
</div>
  );
}

export default ImageBanner