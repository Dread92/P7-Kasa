import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Navbar from '../components/Navbar';
import Main from '../layout/Main';
import { Spinner } from '../components/Spinner';

const Template = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay or asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Example: Setting isLoading to false after 5seconds
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        {isLoading ? (
          <div className="spinner-container">
            <Spinner />
          </div>
        ) : (
          <Outlet />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Template;
