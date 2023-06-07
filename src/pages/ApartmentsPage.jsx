import React from 'react';
import "./ApartmentsPage.scss";
import { DescriptionContainer } from '../components/DescriptionContainer';
import ApartmentBanner from'../components/ImageBanner';
import {ApartmentHeader} from '../components/ApartmentHeader';


function ApartmentsPage() {
  return (
    <div className='apartment-page'>
        <ApartmentBanner/>
        <ApartmentHeader/>
    <div className='apartment__description__component'>
     <DescriptionContainer/>
     <DescriptionContainer/>
     </div>
</div>  
  )
};



export default ApartmentsPage