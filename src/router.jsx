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
    errorElement: <ErrorPageNotFound />,//représente la racine de l'application et utilise un composant <Template /> comme élément.
    // Si une erreur se produit lors de l'affichage de cette route, le composant <ErrorPageNotFound /> sera affiché à la place.
    children: [ // liste d'enfants qui représentent les différentes routes de l'application.
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/apartments",
        element: <ApartmentsPage />  
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);