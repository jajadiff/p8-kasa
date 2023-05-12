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
      <div className="container__grid">
        {cardDatas.map((cardData) => (
          <Link
            to={`/apartment/${cardData.key} `}
            key={cardData.key}
            className="container__link"
          >
            <article className="container__card">
              <img
                src={cardData.cover}
                alt={cardData.title}
                className="container__img container__card"
              />
              <h2 className="container__title">{cardData.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Card;
