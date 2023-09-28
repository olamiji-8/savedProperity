import React from "react";
import "../style/buycard.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BuyCard = ({ status }) => {
  return (
    <>
      <div className={!status ? "Buy-Card" : "Buy-Card Buy-Card__column"}>
        <div className="Buy_Card__Inner ">
          <Carousel showThumbs={false}>
            <img
              className="Card__Image"
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="food"
            />
            <img
              className="Card__Image"
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg"
              alt="food"
            />
            <img
              className="Card__Image"
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg"
              alt="food"
            />
          </Carousel>
        </div>

        <div className="Buy__Text__Container">
          <div className="Buy__for__sale">
            <p>For Sale</p>
            <p>Land</p>
          </div>

          <div className="Buy__for__sale__description">
            <p>Private Room in 4 bedroom house </p>
            <span>Ibeju Lekki</span>
            <h4>N4,000,000</h4>

            <div className="Buy__for__sale__desc__short">
              <span>3 Bedrooms&nbsp;</span>
              <span>3 Bathrooms</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCard;
