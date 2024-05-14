import React from "react";
import "./Cards.scss";

const cards = [
  {
    id: 1,
    img: "./images/card1.svg",
    title: "Pet Grooming",
    desc: "There are many variatio of passage of Lorem for a Ipsum available",
  },
  {
    id: 2,
    img: "./images/card2.svg",
    title: "Veterinary",
    desc: "There are many variatio of passage of Lorem for a Ipsum available",
  },
  {
    id: 3,
    img: "./images/card3.svg",
    title: "Dog Setting",
    desc: "There are many variatio of passage of Lorem for a Ipsum available",
  },
  {
    id: 4,
    img: "./images/card4.svg",
    title: "Healthy Meals",
    desc: "There are many variatio of passage of Lorem for a Ipsum available",
  },
];

export default function Cards() {
  return (
    <div className="Cards" id="services">
      <div className="Cards__content">
        <div className="Cards__title">
          <p>Care For Your Pet</p>
          <h2>What We Do</h2>
        </div>
        <div className="Cards__block">
          {cards.map((elem) => {
            return (
              <div className="Cards__data">
                <img src={elem.img} alt="logo" />
                <h2>{elem.title}</h2>
                <p>{elem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
