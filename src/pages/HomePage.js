import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import bgAccueil from "../assets/banner_accueil.png";

function HomePage() {
  return (
    <>
      <Header />
      <Banner backgroundImage={bgAccueil}>
        <h2 className="banner__txt">Chez vous, partout et ailleurs</h2>
      </Banner>
      <Footer />
    </>
  );
}

export default HomePage;
