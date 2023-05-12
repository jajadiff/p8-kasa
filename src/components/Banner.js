import React from "react";
// import banneraccueil from "../assets/banner_accueil.png";
// import bgAccueil from "../assets/banner_accueil.png";

function Banner(props) {
  return (
    <section
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="banner"
    >
      {props.children}
    </section>
  );
}

export default Banner;
