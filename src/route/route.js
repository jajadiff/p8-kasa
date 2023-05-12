import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header.js";
import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
// import Footer from "../components/Footer.js";
// import Banner from "../components/Banner.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apartment/",
    element: (
      <>
        <Header />
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
