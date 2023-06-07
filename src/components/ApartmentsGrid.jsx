import React from 'react';
import "./ApartmentsGrid.scss";
import {ApartmentCard} from './ApartmentCard.jsx'

export function ApartmentsGrid() {
  return (
    <div className='grid'>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
    </div>
  )
}

