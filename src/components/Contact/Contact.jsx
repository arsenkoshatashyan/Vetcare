import React from "react";
import "./Contact.scss";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="Contact__content">
        <div className="Contact__title">
          <h2>Professional Pet Care</h2>
          <p>
            Pet owners trust us to look after the needs of their beloved
            companions. We are specialists committed to delivering the very
            highest of veterinary care and affection.
          </p>
          <button>Contact Us Now</button>
        </div>
        <div className="Contact__image">
          <img src="./images/dog3.svg" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
