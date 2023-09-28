import React from "react";
import { savedProperty } from "../../data/savedProperty/data";
import SavedCarousel from "./Saved-Carousel-Property";

const SavedProperty = () => {
  

  return (
    <article className="flex-all">
      <div className="saved-property">
        {/*<div className="min-nav"></div>*/}
        <div className="min-show">
          {/* <BackButton /> */}
        </div>
        <h2 className="service-provider-h2 saved-h2 min-none">
          Saved Searches
        </h2>
        <div className="search-box">
          <input
            className="search-bar"
            type="search"
            placeholder="Search by name, location"
            id=""
          />
          <img
            className="search-icon"
            src="/saved-property-images/search_icon.png"
            alt=""
          />
        </div>
        <div className="long-line min-none saved-top-line"></div>
        <div className="saved-property-all">
          {savedProperty.map((spty) => {
            const { id, img, title, location, price, properties } = spty;
            return (
              <div className="saved-property-each" key={id}>
              {/*                
                <img
                  className="left-arrow"
                  src="/saved-property-images/left-icon.png"
                  alt="left-arrow"
                />
                <img
                  className="right-arrow"
                  src="/saved-property-images/right-icon.png"
                  alt="right-arrow"
                />*/}
                <img
                  className="heart-icon"
                  src="/saved-property-images/heart.png"
                  alt="heart"
                />

                <div className="saved-property-each-img">
                  <SavedCarousel />
                </div>
                <div className="saved-property-text">
                  <br />
                  <div className="flex-all saved-flex">
                    <p>For Sale</p>
                    <p>Land</p>
                  </div>
                  <div className="long-line"></div>
                  <br />
                  <h4>{title}</h4>
                  <p>{location}</p>
                  <br />
                  <p className="saved-property-each-price">
                    N{price.toString().split(",", 2)}
                  </p>
                  <div className="long-line"></div>
                  <p className="saved-property-each-properties">{properties}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default SavedProperty;
