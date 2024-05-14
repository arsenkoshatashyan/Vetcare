import React from "react";
import "./Tariff.scss";

const tariff = [
  {
    id: 1,
    about: "Regular Pack",
    day: "3 Days",
    desc: "Pet Shower Fitness Checkup Pet Grooming Hair and Nail Cut Control Hair Falling",
    pay: "$150",
    btn: "Purchase Pack",
  },
  {
    id: 1,
    about: "Exclusive Pack",
    day: "10 Days",
    desc: "Pet Shower Fitness Checkup Pet Grooming Hair and Nail Cut Control Hair Falling",
    pay: "$350",
    btn: "Purchase Pack",
  },
  {
    id: 1,
    about: "Premium Pack",
    day: "30 Days",
    desc: "Pet Shower Fitness Checkup Pet Grooming Hair and Nail Cut Control Hair Falling",
    pay: "$550",
    btn: "Purchase Pack",
  },
];

export default function Tariff() {
  return (
    <div className="Tariff" id="news">
      <div className="Tariff__content">
        <div className="Tariff__block">
          {tariff.map((elem) => {
            return (
              <div className="Tariff__packages">
                <h3>{elem.about}</h3>
                <h2>{elem.day}</h2>
                <p>{elem.desc}</p>
                <h4>
                  {elem.pay} <br />
                  Per Visit
                </h4>
                <button>{elem.btn}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
