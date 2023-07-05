import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

export function ApartmentCard(props) {
  const { id, imageApartments, title } = props;

  return (
    <Link
      to="/apartments"
      state={{
        apartmentId: id
      }}
    >
      <div className='apartment'>
        <img src={imageApartments} alt={title} />
        <div className='gradient-overlay'></div>
        <div className='apartment__titlecard'>{title}</div>
      </div>
    </Link>
  );
}

