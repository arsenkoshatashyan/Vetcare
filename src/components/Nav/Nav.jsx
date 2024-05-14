import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__content">
        <div className="Nav__logo">
          <img src="./images/Vetcare.svg" alt="vetcare" />
        </div>
        <ul>
          <li>
            <a href="#start">Start</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button>
          384-129- <a href="#"></a>293-39
        </button>
      </div>
    </div>
  );
}
