import React, { useEffect, useState } from 'react';
import "./ApartmentsGrid.scss";
import {ApartmentCard} from '../ApartmentCard/index'



export function ApartmentsGrid() {
  const   [apartments, setApartments] = useState([]);

  // useEffect avec array vide = execute au chargement du composant(ici ApartmentsGrid)
  useEffect(fetchApartments, [])

  function fetchApartments (){
  // on récupère notre API grâce à la méthode fetch puis on lui demande d'afficher la réponse en json
 fetch("api.json")
.then((res) => (res.json()))
.then((res) => setApartments(res))
.catch(console.error);
}

  return (
    <div className='grid'>
      {apartments.map((apartment) =>
       (
        <ApartmentCard title={apartment.title} imageApartments={apartment.cover} id={apartment.id}/>
      )
      )
      }
    </div>
  )
}
