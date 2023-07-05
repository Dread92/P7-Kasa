import React from 'react';
import './ErrorPageNotFound.scss';
import Main from '../../layout/Main';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
export function ErrorPageNotFound({ showNavbar = true }) {
  return (
    <>
      {showNavbar && <Navbar />}
      <Main>
        <div className='error-page'>
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}
