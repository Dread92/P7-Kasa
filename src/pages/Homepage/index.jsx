import React from 'react';
import "./Homepage.scss";
import Banner from '../../layout/Banner/index';
import {ApartmentsGrid} from '../../components/ApartmentsGrid/index';







function HomePage() {
  return (
    <>
       
       <Banner/>
       <ApartmentsGrid/>
      
    </>
  )
}



export default HomePage



