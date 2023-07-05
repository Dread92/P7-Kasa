import React, { useEffect, useState } from 'react';
import "./ApartmentsGrid.scss";
import { ApartmentCard } from '../ApartmentCard/index'



export function ApartmentsGrid() {
  const [apartments, setApartments] = useState([]);/* Utilisation du hook useState pour créer une variable d'état
   "apartments" et une fonction "setApartments" pour la mettre à jour. 
  "apartments" est initialisé avec une valeur vide ([]) */

  // useEffect avec array vide = execute au chargement du composant(ici ApartmentsGrid)
  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    //Cette fonction utilise la méthode fetch pour récupérer les données de l'API à partir du fichier "api.json". 
    //Les données sont ensuite converties en JSON et mises à jour dans l'état "apartments" à l'aide de la fonction "setApartments".
    fetch("api.json")
      .then((res) => (res.json()))
      .then((res) => setApartments(res))
      .catch(console.error);
  }


  /* //Utilisation de la méthode map sur le tableau "apartments". 
  //Pour chaque élément "apartment" du tableau, on crée un composant ApartmentCard en utilisant la balise <ApartmentCard />. 
  //Les propriétés "key", "title", "imageApartments" et "id" sont passées à chaque instance de ApartmentCard pour les personnaliser avec les données de l'appartement correspondant.*/
    return (
    <div className='grid'>
      {apartments.map((apartment) =>
      (
        <ApartmentCard key={apartment.id} title={apartment.title} imageApartments={apartment.cover} id={apartment.id} />
      )
      )
      }
    </div>
  )
}
