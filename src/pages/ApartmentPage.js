import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel.js";
import InformationApartment from "../components/InformationApartment.js";
import data from "../data/logements.json";
import ErrorPage from "./ErrorPage.js";

function ApartmentPage() {
  const { id } = useParams();

  const apartmentId = data.find((apartment) => apartment.id === id);

  if (!apartmentId) {
    console.warn(`No routes matched location "/${id}"`);
    console.error(`This URL does not exist`);
    return <ErrorPage />;
  }

  return (
    <>
      <Carrousel id={id} />
      <InformationApartment id={id} />
    </>
  );
}

export default ApartmentPage;
