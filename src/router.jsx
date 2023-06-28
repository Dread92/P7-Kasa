import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ApartmentsPage from "./pages/ApartmentsPage";
import Template from "./Template/index";
import About from "./pages/About/index";
import { ErrorPageNotFound } from "./pages/ErrorPageNotFound";

export const router = createBrowserRouter([
    {
      element: <Template/>,
      errorElement: <ErrorPageNotFound/>,
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
          element: <About/>
        }
      ]
    }
  ]);