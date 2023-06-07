import React from 'react';
import './ApartmentHeader.scss';


export function ApartmentHeader() {
  return (
    <div className='apartment__header'>
        <div className='apartment__title'>
    <h1 className='apartment-page__title'>Cozy loft on Canal Saint-Martin</h1>
    <h2 className='apartment-page__subtitle'>Paris, île de france</h2>
    <div className='apartment__tags'>
            <span >Cozy</span>
            <span >Canal</span>
            <span >Paris 10</span>
            </div>
        </div>
        <div className='apartment__owner'>
        <div className='apartment__owner__infos'>
            <h3>
                <span>Alexandre</span>
                <span>Dumas</span>
            </h3>
            <div className='apartment__owner__badge'></div>
            </div>
            <div className='apartment__owner__stars'>
            <span className='filled'>★</span>
            <span className='filled'>★</span>
            <span className='filled'>★</span>
            <span className='empty'>★</span>
            <span className='empty'>★</span>
            </div>
        </div>
    </div>
  )
}

