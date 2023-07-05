import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ApartmentsPage from "./pages/ApartmentsPage";
import Template from "./Template/index";
import About from "./pages/About/index";
import { ErrorPageNotFound } from "./pages/ErrorPageNotFound";


//La configuration du router comprend plusieurs objets qui spécifient les différentes routes de l'application.
export const router = createBrowserRouter([
  {
    element: <Template />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/apartments/:apartmentId",
        element: <ApartmentsPage />
      },
      {
        path: "/about",
        element: <About />
      },
      // Add a catch-all route to handle incorrect apartmentId paths
      {
        path: "/apartments/*",
        element: <ErrorPageNotFound />
      }
    ]
  }
]);
