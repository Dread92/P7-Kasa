import React from 'react'
import './ImageBanner2.scss'
import aboutimg from '../../assets/aboutimg.png';


 function AboutBanner(props) {
  

  return (
    <div className='banner__img'>
    <img src={aboutimg} alt=""/>
</div>
  );
}

export default AboutBanner