import React from "react";
import Banner from "../components/Banner.js";
import bgApropos from "../assets/banner_apropos.png";
import data from "../data/about.json";
import Toggle from "../components/Toggle.js";

function AboutPage() {
  return (
    <>
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
    </>
  );
}

export default AboutPage;
