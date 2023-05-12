import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel.js";

function ApartmentPage() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Carrousel id={id} />
      <Footer />
    </>
  );
}

export default ApartmentPage;
