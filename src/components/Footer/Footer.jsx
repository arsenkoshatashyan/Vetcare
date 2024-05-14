import React from "react";
import "./Footer.scss";

const data = [
  {
    id: 1,
    title: "Address",
    contacts: [
      "+23 384 485 29",
      "vet@shamim.com",
      "123 king street, MelbrownVictoria 3000, Australia",
    ],
  },
  {
    id: 2,
    title: "Links",
    contacts: [
      "About Us",
      "Groomers",
      "Contact Us",
      "Privacy Policy",
      "Tearms",
    ],
  },
  {
    id: 1,
    title: "Opening Hours",
    contacts: [
      "Monday-Tuesday 09:00-18:00",
      "Wednesday 09:00-18:00",
      "Thrusday-Friday 09:00-18:00",
      "Saturday 10:00-17:00",
      "Sunday 10:30-16:00",
    ],
  },
];

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__post">
          <img src="./images/Logo.svg" alt="" />
          <p>
            Quisque id leo non dolor tempor elementum quis ac urna. Nam
            pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin
          </p>
          <div className="Footer__post-email">
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="Footer__lists">
          {data.map((elem) => {
            return (
              <ul key={elem.id}>
                <h3>{elem.title}</h3>
                {elem.contacts.map((elem, index) => {
                  return <li key={index}>{elem}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <p>
        © Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights
        Reserved
      </p>
    </div>
  );
}
