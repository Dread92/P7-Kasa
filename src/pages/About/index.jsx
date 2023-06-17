import React from 'react'
import AboutBanner from '../../components/ImageBanner2'
import  DescriptionContainer  from '../../components/DescriptionContainer'
import "./About.scss"
import Banner from '../../layout/Banner';

function About() {
  return <>
  <AboutBanner />
  <div className='container__about'>
  <DescriptionContainer title="Fiabilité" content="hello"/>
  <DescriptionContainer title="Respect" content="hello"/>
  <DescriptionContainer title="Service" content="hello"/>
  <DescriptionContainer title="Responsabilité" content="hello"/>
  </div>
  </>
}

export default About