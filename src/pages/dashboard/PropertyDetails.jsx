import React, { useState } from "react";
import "../../styles/pages/propertyDetails.scss";
import images1 from "../../assets/images/propertyDetials/image 1.png";
import images2 from "../../assets/images/propertyDetials/image 2.png";
import images3 from "../../assets/images/propertyDetials/image 3.png";
import images4 from "../../assets/images/propertyDetials/image 4.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { data } from "../../data/property-data/property-details";
import { useParams, Link } from "react-router-dom";
import PromptComponent from "../../components/ui/logout/prompt-component";

const PropertyDetails = () => {
  const check = useParams();

  const newData = data.filter((value) => {
    if (value.id == check.details) {
      return value;
    }
  });

  const {
    address,
    bedroom,
    bathroom,
    price,
    landSize,
    rate,
    PropertyDocument,
  } = !newData[0]
    ? {
        address: "not available",
        bedroom: "not available",
        bathroom: "not available",
        price: "not available",
        landSize: "not available",
        rate: "not available",
        PropertyDocument: "not available",
      }
    : newData[0];

  const [prompt, setPrompt] = useState(0);
  return (
    <div className="property-details-container">
      <div className="property-details-wrapper">
        <div className="property-section1">
          <Link to="/property-data" className="top-item">
            <MdOutlineKeyboardArrowLeft className="left-arrow" />
            <h1 className="text1">Back</h1>
          </Link>
        </div>
        <div className="property-section2">
          <img src={images1} alt="home-view-carousel" height={"100%"} />
        </div>
        <div className="property-section3">
          <div className="item1">
            <div className="item1a">
              <p className="sub1">Address :</p>
              <p className="sub2">{address}</p>
            </div>
            <div className="item1a">
              <p className="sub1">Number of bedroom :</p>
              <p className="sub2">{bedroom}</p>
            </div>
            <div className="item1a">
              <p className="sub1">Number of bathrooms :</p>
              <p className="sub2">{bathroom}</p>
            </div>
          </div>
          <div className="item2">
            <div className="item1a">
              <p className="sub1">Selling Price :</p>
              <p className="sub2">{price}</p>
            </div>
            <div className="item1a">
              <p className="sub1">Size of land :</p>
              <p className="sub2">{landSize}</p>
            </div>
            <div className="item1a">
              <p className="sub1">Commission rate :</p>
              <p className="sub2">{rate}</p>
            </div>
            <div className="item1a">
              <p className="sub1">Property Document : </p>
              <p className="sub2">{PropertyDocument}</p>
            </div>
          </div>
        </div>
        <div className="property-section4">
          <button
            className="property-view-button"
            onClick={() => {
              setPrompt(1);
            }}
          >
            Remove Property
          </button>
        </div>

        <PromptComponent
          state={prompt}
          setState={setPrompt}
          text="You are about to remove this property from Renagers Listing"
          buttonLabel="Remove"
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
