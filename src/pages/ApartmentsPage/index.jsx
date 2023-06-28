import React, { useEffect, useState } from 'react';
import "./ApartmentsPage.scss";
import DropDown from '../../components/DropDown/index';
import ApartmentBanner from '../../components/Carousel';
import { ApartmentHeader } from '../../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';

function ApartmentsPage() {
  const location = useLocation(); // Obtenir la localisation à partir de React Router
  console.log("location", location);
  console.log("our apartment id is:", location.state.apartmentId);

  const [selectedApartment, setselectedApartment] = useState(null); // usestate pour stocker l'appartement sélectionné

  useEffect(() => {
    fetchApartmentApi();
  }, []);

  // Fonction pour récupérer les données de l'API d'appartement
  function fetchApartmentApi() {
    fetch("api.json") // Effectuer une requête pour récupérer les données de l'API (fichier JSON)
      .then((res) => res.json()) // Convertir la réponse en format JSON
      .then((apartments) => {
        const selectedApartment = apartments.find((apartment) => apartment.id === location.state.apartmentId); // Trouver l'appartement correspondant à l'ID dans les données de l'API
        console.log("selectedApartment", selectedApartment);
        setselectedApartment(selectedApartment); // Mettre à jour l'état avec l'appartement sélectionné
      })
      .catch(console.error);
  }

  return (
    <div className='apartment-page'>
      {selectedApartment && (
        <>
          <ApartmentBanner pictures={selectedApartment.pictures} />
          <ApartmentHeader apartment={selectedApartment} />
        </>
      )}
      <div className='apartment__description__component'>
        {selectedApartment && (
          <>
            <DropDown title="Description" content={selectedApartment.description} />
            {selectedApartment.equipments && (
              <DropDown
                title="Equipments"
                content={selectedApartment.equipments.map((equipment, i) => (
                  <li key={i}>{equipment}</li>
                ))}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ApartmentsPage;
