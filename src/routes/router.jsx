import React from 'react';
import { createBrowserRouter } from 'react-router-dom'; //https://reactrouter.com/en/main/start/tutorial
import App from '../App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export const router = createBrowserRouter([
    {
        path: "/",
        element:(
        <>   
        <App/>
        </>
        ),
        errorElement: <h1>404 not found</h1>
      },
      {
        path: "/apartments",
        element:(
            <>
            <Navbar/>
            <h1>Nos appartements</h1>
            <Footer/>
            </>
            )
      },
      {
        path: "/about",
        element:(
        <>
        <Navbar/>
        <h1>A propos</h1>
        <Footer/>
        </>
        )
      },
    
])

