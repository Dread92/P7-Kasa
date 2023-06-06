import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ApartmentsPage from "./pages/ApartmentsPage";
import Template from "./Template/Index";


export const router = createBrowserRouter([
    {
      element: <Template/>,
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