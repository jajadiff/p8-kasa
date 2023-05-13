import React from "react";
import data from "../data/logements.json";
import { useState } from "react";
import starColor from "./../assets/ratingcolor.svg";
import starGrey from "./../assets/ratinggrey.svg";
import Toggle from "./Toggle.js";

function InformationApartment(props) {
  const { id } = props;
  const apartment = data.find((apartment) => apartment.id === id);

  // console.log(apartment.title);
  // console.log(apartment.location);
  // console.log(apartment.tags);

  // /********************************/
  // console.log(apartment.host.name);
  // console.log(apartment.host.picture);
  // console.log(apartment.rating);
  console.log(apartment.description);
  console.log(apartment.equipments);

  function AddStar() {
    const [ratingStars] = useState(apartment.rating);

    const starRating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingStars) {
        starRating.push(
          <img
            key={`rating-${i}`}
            src={starColor}
            className="spacebetween__star"
            alt={`rating-${i}`}
          />
        );
      } else {
        starRating.push(
          <img
            key={`rating-${i}`}
            src={starGrey}
            className="spacebetween__star"
            alt={`rating-${i}`}
          />
        );
      }
    }
    return starRating;
  }

  return (
    <>
      <main className="container__apartment">
        <div className="apartment">
          <div>
            <h2 className="apartment__title">{apartment.title}</h2>
            <p className="apartment__location">{apartment.location}</p>
            <div className="tag">
              {apartment.tags.map((tag) => (
                <p key={tag} className="tag__item">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="spacebetween">
            <div className="host">
              <p className="host__name">{apartment.host.name}</p>
              <img
                src={apartment.host.picture}
                className="host__picture"
                alt={apartment.host.name}
              />
            </div>
            <p>{AddStar()}</p>
          </div>
        </div>
        <div className="togglecontainer">
          <div className="togglecontainer__description">
            <Toggle
              title="Description"
              dropdown={<p>{apartment.description}</p>}
            />
          </div>
          <div className="togglecontainer__equipements">
            <Toggle
              title="Équipements"
              dropdown={
                <ul>
                  {apartment.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default InformationApartment;
