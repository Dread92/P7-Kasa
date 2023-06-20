import React from 'react';
import "./Banner.scss";

function Banner(props) {
  const {text, image, style,imageAlt }= props
  return (
    <div className={ `banner ${style}`}>
        
        <img src={image } alt={imageAlt}className="banner-image"></img>
        {text && <h2 className='banner-title'>{text}</h2>}
    </div>
  )
}
// home page export
export default Banner


