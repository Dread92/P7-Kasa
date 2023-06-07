import React from 'react'
import ApartmentBanner from '../components/ImageBanner'
import { DescriptionContainer } from '../components/DescriptionContainer'
import "../pages/About.scss"

function About() {
  return <>
  <ApartmentBanner/>
  <div className='container__about'>
  <DescriptionContainer/>
  <DescriptionContainer/>
  <DescriptionContainer/>
  <DescriptionContainer/>
  </div>
  </>
}

export default About