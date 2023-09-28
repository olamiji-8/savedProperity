import React from "react";

import Footer from "../layouts/Footer";
import "../styles/pages/about.scss";
import story from "../assets/images/about/story.png";

const About = () => {
  return (
    <div className="about">
      <section className="about-us">
        <h1 className="hide">
          Often times we hear stories of people expressing displeasure over the
          current challenges they face while carrying out real estate
          transactions in Nigeria. At Renager, we hold a strong belief that
          these challenges can be overcome with the aid of technology.
        </h1>

        <h1 className="mobile-text">Digitalizing the Real Estate Process</h1>

        <p className="mobile-text">
          Renager aims to solve the Real Estate problem of doing all
          transactions physically by providing a digital means of acquiring
          properties and completing payments.
        </p>

        <div className="image-holder">
          <div className="image"></div>
          <div className="image2"></div>
        </div>
      </section>

      <section className="our-story">
        <h1>Our Story</h1>

        <div className="container">
          <div className="image-holder">
            <img src={story} alt="story" />
          </div>
          <div className="text-holder">
            <h2 className="hide">
              Connecting stakeholders in the real estate sector
            </h2>
            <h2 className="mobile-text">
              {" "}
              An all in one Property management system. Easier, Stress Free,
              Faster.{" "}
            </h2>
            <p>
              As a team, we have taken cognizance of the tremendous impact of
              technology in solving societal problems and also disrupting the
              traditional means of transacting across the world. This triggered
              us to fully embrace technology and come up with this solution. We
              have effectively bridge the gap between stakeholders in the real
              estate industry by connecting properties available to a larger
              customer base through the use of the internet.
            </p>
          </div>
        </div>
      </section>

      <section className="culture">
        <h3>Our Culture</h3>
        <h2>
          We pride ourselves in various core values which ensure we deliver
          quality properties for our customers
        </h2>
        <div className="culture-bottom">
          <div className="content">
            <div className="image"></div>
            <h4>Trust and Credibility</h4>
            <p>
              Our process involves helping you get high quality properties at
              your own comfort. So from the house hunting phase.
            </p>
          </div>
          <div className="content">
            <div className="image"></div>
            <h4>Young and Dynamic</h4>
            <p>
              Our process involves helping you get high quality properties at
              your own comfort. So from the house hunting phase.
            </p>
          </div>
          <div className="content">
            <div className="image"></div>
            <h4>Passionated</h4>
            <p>
              Our process involves helping you get high quality properties at
              your own comfort. So from the house hunting phase.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <ul>
          <li>
            <div className="image n1"></div>
            <h3>Oladejo Qazeem</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n2"></div>
            <h3>Oloyede Simi</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n3"></div>
            <h3>Fatogun Femisola</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n4"></div>
            <h3>Oladele Titilayo</h3>
            <p>Co-founder</p>
          </li>

          <li>
            <div className="image n5"></div>
            <h3>Oladejo Qazeem</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n6"></div>
            <h3>Oloyede Simi</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n7"></div>
            <h3>Fatogun Femisola</h3>
            <p>Co-founder</p>
          </li>
          <li>
            <div className="image n8"></div>
            <h3>Oladele Titilayo</h3>
            <p>Co-founder</p>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;
