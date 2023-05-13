import React from "react";
import data from "../data/logements.json";
import arrow from "../assets/arrow.svg";
import { useState } from "react";

function Carrousel(props) {
  const { id } = props;
  const apartment = data.find((apartment) => apartment.id === id);

  // console.log(apartment.pictures);

  const [actualSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (actualSlide < apartment.pictures.length - 1) {
      setCurrentSlide(actualSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  function prevSlide() {
    if (actualSlide > 0) {
      setCurrentSlide(actualSlide - 1);
    } else {
      setCurrentSlide(apartment.pictures.length - 1);
    }
  }

  if (apartment.pictures.length === 1) {
    return (
      <div className="carrousel">
        <img
          src={apartment.pictures[actualSlide]}
          className="carrousel__slide"
        />
        <span className="carrousel__counter">
          {actualSlide + 1}/{apartment.pictures.length}
        </span>
      </div>
    );
  }

  return (
    <div className="carrousel">
      <img src={apartment.pictures[actualSlide]} className="carrousel__slide" />
      <span className="arrow">
        <img src={arrow} className="arrow__left" onClick={prevSlide} />
        <img src={arrow} className="arrow__right" onClick={nextSlide} />
      </span>
      <span className="carrousel__counter">
        {actualSlide + 1}/{apartment.pictures.length}
      </span>
    </div>
  );
}

export default Carrousel;
