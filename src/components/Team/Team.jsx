import React from "react";
import "./Team.scss"

const team = [
  {
    id: 1,
    image: "./images/team1.svg",
    name: "Rosalina Wiliam",
    position: "CEO & Founder",
  },
  {
    id: 2,
    image: "./images/team2.svg",
    name: "Rosalina Wiliam",
    position: "CEO & Founder",
  },
  {
    id: 3,
    image: "./images/team3.svg",
    name: "Rosalina Wiliam",
    position: "CEO & Founder",
  },
  {
    id: 4,
    image: "./images/team4.svg",
    name: "Rosalina Wiliam",
    position: "CEO & Founder",
  },
];

export default function Team() {
  return (
    <div className="Team">
      <div className="Team__content">
        <div className="Team__title">
          <p>Our Team</p>
          <h2>Meet Our Groomers</h2>
        </div>
        <div className="Team__block">
          {team.map((elem) => {
            return (
              <div className="Team__cards">
                <img src={elem.image} alt="" />
                <h3>{elem.name}</h3>
                <p>{elem.position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
