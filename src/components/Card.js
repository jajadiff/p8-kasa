import React from "react";
import { Link } from "react-router-dom";
import data from "../data/logements.json";

function Card() {
  const cardDatas = data.map((item) => ({
    key: item.id,
    title: item.title,
    cover: item.cover,
  }));
  return (
    <main className="container">
      {cardDatas.map((cardData) => (
        <Link to={`/apartment/${cardData.title} `} key={cardData.key}>
          <article className="container__card">
            <img src={cardData.cover} alt={cardData.title} />
            <h2 className="container__title">{cardData.title}</h2>
          </article>
        </Link>
      ))}
    </main>
  );
}

export default Card;
