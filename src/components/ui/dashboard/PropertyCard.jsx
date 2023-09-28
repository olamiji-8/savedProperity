import React from "react";
import {
  MdOutlineFavorite,
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import "../../../styles/ui/dashboard/propertycard.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PropertyCard(props) {
  return (
    // <div className='property-card-container'>
    <div className="property-card">
      <div className="property-card-background">
        <div className="Card__Overlay"></div>
        <Carousel showThumbs={false} swipeable={true} increment={false}>
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

        <span className="property-card-favourite__icon">
          <MdOutlineFavorite />
        </span>
      </div>

      <div className="property-card-content">
        <div className="property-card-category">
          <div>For Sale</div>
          <span>Land</span>
        </div>
        <p className="property-card-cat__title">
          Private in 4 bedroom house <br />
          <span>Ijebu Lekki</span>
        </p>
        <div className="property-card__price">N4,000,000</div>
        <div className="property-card__desc">
          <div>3 Bedrooms </div>
          <span>3 Bathrooms</span>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default PropertyCard;
