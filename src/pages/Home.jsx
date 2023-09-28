import React from "react";
import Button from "../components/ui/Button";
import Navigation from "../layouts/Navbar";
import headerImage from "../assets/images/home/front.jpeg";
import stars from "../assets/svg/home/stars.svg";
import onlinePayment from "../assets/images/home/OnlinePayment.png";
import dropDown from "../assets/svg/home/drop-down.svg";
import icon from "../assets/svg/home/Group 677.svg";
import Card from "../components/ui/Card";
import DropDown from "../components/ui/Dropdown";
import { useState } from "react";
import ShadowCard from "../components/ui/ShadowCards";
import Footer from "../layouts/Footer";

const Header = () => {
  return (
    <div className="landing-page__header">
      <Navigation />
      <div className="header-section">
        <div>
          <div className="header-section__image">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="header-flex">
          <h1 className="header-section__title">
          Eximious Real Estate
          </h1>
          <p className="header-section__text">
          "Where Seamless Realty Meets Effortless Excellence."
          </p>
          <div className="header-section__searchbar">
            <input type="search" placeholder={`Akure, Ondo state`} />
            <Button text="Search" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Section1 = () => {
  return (
    <div className="landing-section1">
      <p>What is Eximious?</p>
      <div className="landing-section1__flex">
        <div className="all-box">
          <div className="first-box">
            <p>Buy</p>
            <div className="oval"></div>
            <div className="grid">
              <div className="grid-box"></div>
              <div className="grid-box"></div>
              <div className="grid-box"></div>
              <div className="grid-box"></div>
            </div>
          </div>
          <div className="second-box">
            {[
              {
                text: "Sell",
                style: { backgroundColor: "#ffffff" },
              },
              { text: "Rent", style: { backgroundColor: "" } },
              {
                text: "Lease",
                style: {
                  backgroundColor: "#4b5ffa",
                  borderRadius: "0px 0px 10px 0px",
                  height: "12.1em",
                  position: "relative",
                  color: "#fff",
                },
              },
            ].map((item, id) => (
              <div className="" key={id}>
                <Card children={item.text} style={item.style} />
              </div>
            ))}
          </div>
        </div>
        <div className="landing-section__text">
          <h2>
          A Visionary Regenerative Community in Ifedore Local Government, Ondo State, Nigeria.
          </h2>
          <p>
          Eximious Estate is more than just a place to live; it's a testament to innovation and sustainability in the heart of Ondo State. Nestled in the serene landscapes of Ifedore Local Government, Eximious is not just an estate; it's a beacon of modern living, redefining real estate in Nigeria.
          </p>
          <a href="/k">Read more &#8250;</a>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="landing-works">
      <div className="landing-work">
        <p>How it works</p>
        <div className="landing-works__tabbed__buttons">
          <div className="tabbed__button tabbed__button__active">
            I want to buy
          </div>
          <div className="tabbed__button">I want to Sell</div>
          <div className="tabbed__button">I want to Rent</div>
          <div className="tabbed__button">I want to Lease</div>
        </div>
        <div className="tabbed__contents">
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to buy</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">01</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to sell</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">02</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to rent</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">03</div>
          </div>
          <div className="tabbed__content">
            <img src={icon} alt="" />
            <div className="tabbed__content__text">
              <h5 className="tabbed__content__title">Find a property to lease</h5>
              <p>
                View the properties listed on the platform, based on your
                preference. Or simply search based on the filters provided.
              </p>
            </div>
            <div className="numbering">04</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section3 = () => {
  const [dropDetails, setDropDetails] = useState(0);
  const handleclick = function (e) {
    dropDetails === 0
      ? setDropDetails(+e.target.closest(".down-icon").dataset.no)
      : setDropDetails(0);
    console.log(e.target);
  };
  return (
    <div className="landing-why">
      <p>Why Eximious</p>
      <div className="dropdowns">
        {[
          {
            id: 1,
            title: "Regenerative Living",
            p: " Eximious is not just a place to call home; it's a sustainable community that fosters regenerative living. We prioritize eco-friendly practices, green spaces, and a harmonious coexistence with nature.",
            link: onlinePayment,
          },
          {
            id: 2,
            title: "Transparency",
            p: "We believe in transparency as the cornerstone of trust. With Eximious, you can rest assured that your real estate transactions are conducted with the utmost integrity and openness.",
          },
          {
            id: 3,
            title: "Smart Technology",
            p: "Say goodbye to traditional real estate hassles. Eximious leverages cutting-edge technology to streamline the buying, selling, and investing process, making it seamless and efficient.",
          },
          {
            id: 4,
            title: "Community Building",
            p: " Eximious is more than just an estate; it's a vibrant community where like-minded individuals come together to create lasting connections and shared experiences.",
          },
          {
            id: 5,
            title: "Investment Opportunities",
            p: "Whether you're looking for your dream home or a lucrative investment, Eximious offers a range of real estate options to suit your needs and aspirations.",
          },
        ].map((item) => {
          return (
            <div className="dropdown" key={item.id}>
              <div
                className={
                  dropDetails === item.id
                    ? "down-icon icon-active"
                    : "down-icon"
                }
                onClick={handleclick}
                data-no={item.id}
              >
                <img src={dropDown} alt="" />
              </div>
              <div className="">
                <h2>{item.title}</h2>
                <DropDown
                  texts={[item.p]}
                  styles={
                    dropDetails === item.id
                      ? "drop-down drop-down__open"
                      : "drop-down"
                  }
                  imgLink={onlinePayment}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Section4 = () => {
  return (
    <div className="remarks">
      <p style={{ fontSize: "24px" }} className="remarks-text">
        Here's what people are saying
      </p>
      <div className="remarks__heading">
        <h1>
        "Our Eximious process is dedicated to ensuring you secure high-quality properties, all from the comfort of your own preferences and desires."
        </h1>
        <h2>
          - George Ayomipo <br /> <span>CEO</span>
        </h2>
      </div>
      <div className="cards">
        {[
          {
            id: 0,
            remark:
            "The customer service at Eximious is truly exceptional. I received professional guidance throughout the entire process of leasing my property. They made what could have been a daunting experience feel effortless and stress-free. I highly recommend Eximious to anyone looking to make their real estate transactions seamless.",
            author: "Sotomi Olamiji",
          },
          {
            id: 1,
            remark:
            "Eximious exceeded my expectations with their top-notch customer service. The team went above and beyond to assist me in finding the perfect property. Their guidance and support made the process of buying my dream home a breeze. I'm grateful for their expertise and dedication to making real estate transactions a positive experience.",
            author: "Lawal John ",
          },
          {
            id: 2,
            remark:
            "I had an outstanding experience working with Eximious. The customer service is unparalleled. They provided me with expert advice and assistance throughout the entire property purchase journey. Thanks to Eximious, I now own a property that perfectly fits my needs and preferences. I couldn't be happier with their services.",
            author: "Sodipo Esther",
          },
        ].map((item) => {
          const remark = <p className="remark">{item.remark}</p>;
          const author = (
            <div className="author">
              <div className="authorimage">
                <img src="" alt="" />
              </div>
              <div className="">
                <p style={{ marginBottom: "15px" }}>{item.author}</p>
                <img src={stars} alt="" />
              </div>
            </div>
          );

          return (
            <ShadowCard
              key={item.id}
              children={{
                remark: remark,
                author: author,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="landing-page">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;
