
import React from 'react';
import './Spinner.scss';
import logokasa from '../../assets/logokasa.png';

export const Spinner = () => {
  return <div className="spinner">
    <img src={logokasa} alt="Loading Spinner" />
  </div>;
};

