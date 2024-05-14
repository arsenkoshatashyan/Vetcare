import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header" id="start">
      <div className="Header__content">
        <div className="Header__title">
          <h1>For Your Pet`s Natural Life & Care</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="Header__btn">
            <button>Our Services</button>
            <button>Make Appointment</button>
          </div>
        </div>
        <div className="Header__image">
          <img src="./images/dog.svg" alt="dog" />
        </div>
      </div>
    </div>
  );
}
