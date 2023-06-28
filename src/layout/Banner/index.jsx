import React from 'react';
import "./Banner.scss";

function Banner(props) {
  /* const {text, image, style,imageAlt }= props */
  return (
    <div className = { `banner ${props.style}`}>
        
        <img src={props.image } alt={props.imageAlt} className="banner-image"></img>
        {props.text && <h2 className='banner-title'>{props.text}</h2>}
    </div>
  )
}
// home page export
export default Banner


