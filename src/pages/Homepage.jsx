import React from 'react';
import Navbar from '../components/Navbar';
import "./Homepage.scss";
import Banner from '../layout/Banner';
import {ApartmentsGrid} from '../components/ApartmentsGrid.jsx';
import Main from '../layout/Main.jsx';
import Footer from '../layout/Footer.jsx';






function HomePage() {
  return (
    <>
       
       <Banner/>
       <ApartmentsGrid/>
      
    </>
  )
}



export default HomePage



