import React from 'react';
import "./Homepage.scss";
import Banner from '../../layout/Banner/index';
import {ApartmentsGrid} from '../../components/ApartmentsGrid/index';
import bgHome from "../../assets/bannerimg.png"





function HomePage() {
  return (
    <>
       <Banner image={bgHome} imageAlt="banner img" text="Chez vous, partout et ailleurs"/>
       <ApartmentsGrid/>
    </>
  )
}




export default HomePage



