import React from 'react';
import "./ApartmentsPage.scss";
import { ApartmentDescription } from '../components/ApartmentDescription';
import ApartmentBanner from'../components/ApartmentBanner';
import {ApartmentHeader} from '../components/ApartmentHeader';


function ApartmentsPage() {
  return (
    <div className='apartment-page'>
        <ApartmentBanner/>
        <ApartmentHeader/>
    <div className='apartment__description__component'>
     <ApartmentDescription/>
     <ApartmentDescription/>
     </div>
</div>  
  )
};



export default ApartmentsPage