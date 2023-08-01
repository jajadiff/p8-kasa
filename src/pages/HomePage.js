import React from "react";
import Banner from "../components/Banner.js";
import bgAccueil from "../assets/banner_accueil.png";
import Card from "../components/Card.js";

function HomePage() {
  return (
    <>
      <Banner backgroundImage={bgAccueil}>
        <h2 className="banner__txt">Chez vous, partout et ailleurs</h2>
      </Banner>
      <Card />
    </>
  );
}

export default HomePage;
