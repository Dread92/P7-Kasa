import React, { useEffect, useState } from 'react';
import "./ApartmentsPage.scss";
import DropDown from '../../components/DropDown/index';
import ApartmentBanner from '../../components/Carousel';
import { ApartmentHeader } from '../../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';

function ApartmentsPage() {
  const location = useLocation();/* La fonction useLocation est utilisée pour obtenir la localisation à partir de React Router. 
  La valeur de la localisation est stockée dans la variable location. */


  const [selectedApartment, setselectedApartment] = useState(null); // usestate pour stocker l'appartement sélectionné

  useEffect(() => {//Le useEffect est utilisé pour exécuter la fonction fetchApartmentApi lors du chargement initial de la page.
    fetchApartmentApi();
  }, []);

  /* fetchApartmentApi est définie pour récupérer les données de l'API d'appartement.
   Une requête est effectuée pour récupérer les données du fichier JSON api.json. 
   Les données sont converties en format JSON, puis l'appartement correspondant à l'ID spécifié 
   dans location.state.apartmentId est extrait des données de l'API.
   L'appartement sélectionné est mis à jour dans l'état local à l'aide de setselectedApartment.  */
  function fetchApartmentApi() {
    fetch("api.json") // Effectuer une requête pour récupérer les données de l'API (fichier JSON)
      .then((res) => res.json()) // Convertir la réponse en format JSON
      .then((apartments) => {
        const selectedApartment = apartments.find((apartment) => apartment.id === location.state.apartmentId); // Trouver l'appartement correspondant à l'ID dans les données de l'API
       
        setselectedApartment(selectedApartment); // Mettre à jour l'état avec l'appartement sélectionné
      })
      .catch(console.error);
  }

  return (
    <div className='apartment-page'>
      {selectedApartment && (

        /*Si selectedApartment est défini, les composants ApartmentBanner et ApartmentHeader sont rendus. 
        Ces composants sont utilisés pour afficher la bannière et l'en-tête de l'appartement respectivement. 
        Les propriétés pictures et apartment sont passées aux composants correspondants.*/

        <>
          <ApartmentBanner pictures={selectedApartment.pictures} />
          <ApartmentHeader apartment={selectedApartment} />
        </>
      )}
      <div className='apartment__description__component'>
        {selectedApartment && (
          <>
          {/*La propriété content est définie comme un tableau généré en utilisant selectedApartment.equipments.map. 
          Pour chaque élément equipment dans le tableau des équipements de l'appartement, une balise li est créée avec equipment */}
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
