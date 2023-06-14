import React, { useEffect, useState } from 'react';
import "./ApartmentsPage.scss";
import  DescriptionContainer  from '../components/DescriptionContainer';
import ApartmentBanner from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';

function ApartmentsPage() {
  const location = useLocation();
  console.log("location", location);
  console.log("our apartment id is:", location.state.apartmentId);

  const [selectedApartment, setselectedApartment] = useState(null);

  useEffect(() => {
    fetchApartmentApi();
  }, []);

  function fetchApartmentApi() {
    fetch("api.json")
      .then((res) => res.json())
      .then((apartments) => {
        const selectedApartment = apartments.find((apartment) => apartment.id === location.state.apartmentId);
        console.log("selectedApartment", selectedApartment);
        setselectedApartment(selectedApartment);
      })
      .catch(console.error);
  }

  return (
    <div className='apartment-page'>
      {selectedApartment && (
        <>
          <ApartmentBanner imageUrl={selectedApartment.cover} />
          <ApartmentHeader apartment={selectedApartment} />
        </>
      )}
      <div className='apartment__description__component'>
        {selectedApartment && (
          <>
            <DescriptionContainer title="Description" content={selectedApartment.description} />
            {selectedApartment.equipments && (
              <DescriptionContainer
                title="Equipments"
                content={selectedApartment.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
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
