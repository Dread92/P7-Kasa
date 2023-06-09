import React from 'react';
import './ApartmentHeader.scss';

export function ApartmentHeader(props) {
  const apartment = props.apartment;
  const name = apartment.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='apartment__header'>
      <div className='apartment__title'>
        <h1 className='apartment-page__title'>{props.apartment.title}</h1>
        <h2 className='apartment-page__subtitle'>{props.apartment.location}</h2>
        <div className='apartment__tags'>
          {props.apartment.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
      <div className='apartment__owner'>
        <div className='apartment__owner__infos'>
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className='apartment__owner__badge'>
            <img src={apartment.host.picture} alt="" />
          </div>
        </div>
        <div className='apartment__owner__stars'>
          {[1, 2, 3, 4, 5].map((number) => (
            <span key={number} className={props.apartment.rating >= number ? "filled" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

