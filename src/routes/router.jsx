import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom'; //https://reactrouter.com/en/main/start/tutorial
import HomePage from '../pages/Homepage';
import Footer from '../layout/Footer';
import Navbar from '../components/Navbar';
import Main from '../layout/Main';
import ApartmentsPage from '../pages/ApartmentsPage';

const HeaderFooterCombo = () => {
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



export const router = createBrowserRouter([
  {
    element: <HeaderFooterCombo />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/apartments",
        element: <ApartmentsPage/>   //  <ApartmentsPage/>  
      },
      {
        path: "/about",
        element: <h1>A propos</h1> 
      }
    ]
  }
]);