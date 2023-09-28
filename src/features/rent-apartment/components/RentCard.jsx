import React from "react";

import "../style/rentcard.scss";

const RentCard = ({ status }) => {
  return (
    <>
      <div className={!status ? "Rent-Card" : "Rent-Card Rent-Card__column"}>
        <img
          className="Card__Image"
          src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg"
          alt="food"
        />
        <div className="Rent__Text">
          <div className="rent__for__sale">
            <div className="rent__for__sale__title">
              <p>For Sale</p>
              <p>Land</p>
            </div>
            <hr />
          </div>
          <div className="rent__for__sale__description">
            <p>Private Room in 4 bedroom house ibeju Lekki</p>
            <h4>N4,000,000</h4>
            <hr />
            <div className="rent__for__sale__desc__short">
              <p>3 Bedrooms</p>
              <p>3 Bathrooms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentCard;
