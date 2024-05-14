import React from "react";
import "./Experience.scss";
import Team from "../Team/Team";

export default function Experience() {
  return (
    <div className="Experience" id="about">
      <div className="Experience__content">
        <div className="Experience__block">
          <p>Our Success Story</p>
          <h2>Experience Vet Clinic And Services</h2>
          <p>
            Aliquam erat volutpat In id fermentum augue, ut pellentesque
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis
            maximus.
          </p>
          <p>
            <span>
              <img src="./images/Union.svg" alt="" />
            </span>
            Donec commodo scelerisque laoreet nibh hendrerit
          </p>
          <p>
            <span>
              <img src="./images/Union.svg" alt="" />
            </span>
            In aliquet magna nec lobortis maximus. Etiam a dolor placerat
          </p>
          <p>
            <span>
              <img src="./images/Union.svg" alt="" />
            </span>
            Etiam dolor nec elementum ipsum convall Maecenas
          </p>
          <button>Know More About Us</button>
        </div>
        <div className="Experience__image">
          <img src="./images/dog2.svg" alt="dog" />
        </div>
      </div>
      <Team />
    </div>
  );
}
