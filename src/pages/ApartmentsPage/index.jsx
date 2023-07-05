import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./ApartmentsPage.scss";
import DropDown from '../../components/DropDown/index';
import ApartmentBanner from '../../components/Carousel';
import { ApartmentHeader } from '../../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';
import { ErrorPageNotFound } from '../../pages/ErrorPageNotFound/index';


function ApartmentsPage() {
  const navigate = useNavigate();
  const { apartmentId } = useParams();
  const location = useLocation();

  const [selectedApartment, setSelectedApartment] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchApartmentApi();
  }, [apartmentId]);

  function fetchApartmentApi() {
    fetch("/api.json")
      .then((res) => res.json())
      .then((apartments) => {
        const selectedApartment = apartments.find((apartment) => apartment.id === apartmentId);
        if (selectedApartment) {
          setSelectedApartment(selectedApartment);
          setError(false);
        } else {
          setSelectedApartment(null);
          setError(true);
        }
      })
      .catch(console.error);
  }

  useEffect(() => {
    // Update the URL when apartmentId changes
    navigate(`/apartments/${apartmentId}`);
  }, [apartmentId, navigate]);
  if (!selectedApartment) {
    return <ErrorPageNotFound showNavbar={false} />;
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
