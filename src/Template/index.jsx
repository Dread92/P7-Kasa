import React from 'react';
import {Outlet } from 'react-router-dom'; //https://reactrouter.com/en/main/start/tutorial
import Footer from '../layout/Footer';
import Navbar from '../components/Navbar';
import Main from '../layout/Main';

const Template = () => {
  return(
  <>
    <Navbar/>
    <Main>
    <Outlet/>
    </Main>
    <Footer/>
  </>
  );
};

export default Template;
