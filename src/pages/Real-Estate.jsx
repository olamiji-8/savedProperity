import React from "react";

import Footer from "../layouts/Footer";
import Button from "../components/ui/Button";
import "../styles/pages/realestate.scss";

const RealEstate = () => {
  return (
    <div className="real-estate-container">
      <header className="real-estate-header">
        <h1>
          Need experts to bring your
          <br /> ideas to life?{" "}
        </h1>
        <p>We build the future</p>
        <Button
          text="Contact Us"
          link="/"
          styles={{
            padding: "0 2.5rem",
            backgroundColor: "#4B5FFA",
            borderRadius: "0%",
            height: "48px",
          }}
        />
      </header>
      <section className="real-estate-section">
        <h2>
          We offer real estate construction and development <br /> ranging from
          low tier to top tier
        </h2>
        <div className="real-estate-section-flex">
          <section className="real-estate-box">
            <div></div>
            <p>Schedule a discussion</p>
          </section>
          <section className="real-estate-box">
            <div></div>
            <p>We discuss</p>
          </section>
          <section className="real-estate-box">
            <div></div>
            <p>We start your project</p>
          </section>
        </div>
        <Button
          text="Contact Us"
          link="/"
          styles={{
            padding: "0 2.5rem",
            backgroundColor: "#4B5FFA",
            borderRadius: "0%",
            height: "48px",
            display: "block",
            margin: "auto",
          }}
          className="real-estate-box-btn"
        />
      </section>
      <Footer />
    </div>
  );
};

export default RealEstate;
