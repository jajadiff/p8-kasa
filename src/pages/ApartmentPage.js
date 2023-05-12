import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel.js";
import InformationApartment from "../components/InformationApartment.js";

function ApartmentPage() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Carrousel id={id} />
      <InformationApartment id={id} />
      <Footer />
    </>
  );
}

export default ApartmentPage;
