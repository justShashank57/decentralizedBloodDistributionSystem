import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div
        className="contact"
        style={{
          backgroundImage: `url(${"/assets/contact_bg.png"})`,
        }}
      >
        <p>
          <span>Join Us</span>
          <br />
          Together We Can Make World More Health & Better
        </p>
        <a href="mailto: om2021064@akgec.ac.in" rel="noopener noreferrer">
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Contact;
