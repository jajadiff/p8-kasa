import React from "react";
import data from "../data/logements.json";
import arrow from "../assets/arrow.svg";

function Carrousel(props) {
  const { id } = props;
  const apartment = data.find((apartment) => apartment.id === id);

  console.log(apartment.pictures);

  let actualSlide = 0;

  return (
    <div className="carrousel">
      <img src={apartment.pictures[actualSlide]} className="carrousel__slide" />
      <span className="arrow">
        <img src={arrow} className="arrow__left" />
        <img src={arrow} className="arrow__right" />
      </span>
    </div>
  );
}

export default Carrousel;
