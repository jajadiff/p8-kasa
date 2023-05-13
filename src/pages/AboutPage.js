import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import bgApropos from "../assets/banner_apropos.png";
import data from "../data/about.json";
import Toggle from "../components/Toggle.js";

function AboutPage() {
  return (
    <>
      <Header />
      <Banner backgroundImage={bgApropos} />
      <div className="abouttoggle">
        {data.map((item) => (
          <Toggle
            key={item.key}
            title={item.title}
            dropdown={<p>{item.subtitle}</p>}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
