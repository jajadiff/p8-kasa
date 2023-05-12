import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import bgApropos from "../assets/banner_apropos.png";

function AboutPage() {
  return (
    <>
      <Header />
      <Banner backgroundImage={bgApropos} />
      <Footer />
    </>
  );
}

export default AboutPage;
