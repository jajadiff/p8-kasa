import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
import ApartmentPage from "../pages/ApartmentPage.js";
// import Footer from "../components/Footer.js";
// import Banner from "../components/Banner.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    /* Récupérer l'id = :id */
    path: "/apartment/:id",
    element: (
      <>
        <ApartmentPage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <AboutPage />
      </>
    ),
  },
]);
