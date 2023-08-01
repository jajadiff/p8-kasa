import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
import ApartmentPage from "../pages/ApartmentPage.js";

const Router = () => {
  return (
    <Routes>
      <Route path="/index" element={<HomePage />} />
      <Route path="/apartment/:id" element={<ApartmentPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
