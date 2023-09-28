import React, { useState } from "react";
import Button from "../components/ui/Button";

import "../styles/pages/property-info.scss";
import map from "../assets/images/map.PNG";
import {
  MdOutlineFavorite,
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";
import PropertyCard from "../components/ui/dashboard/PropertyCard";
import { Carousel } from "react-responsive-carousel";
import { FaTimes } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const PropertyInfo = () => {
  const [physicalDisplay, setphysicalDisplay] = useState({ display: "none" });
  const [physicalStyling, setphysicalStyling] = useState({
    backgroundColor: "white",
    color: "#4b5ffa",
  });

  const [virtualDisplay, setvirtualDisplay] = useState({ display: "flex" });
  const [virtualStyling, setvirtualStyling] = useState({
    backgroundColor: "#4b5ffa",
    color: "white",
  });

  const virtualHandler = () => {
    setvirtualDisplay({ display: "flex" });
    setvirtualStyling({
      backgroundColor: "#4b5ffa",
      color: "white",
    });

    setphysicalDisplay({ display: "none" });
    setphysicalStyling({
      backgroundColor: "white",
      color: "#4b5ffa",
    });
  };

  const physicalHandler = () => {
    setphysicalDisplay({ display: "flex" });
    setphysicalStyling({
      backgroundColor: "#4b5ffa",
      color: "white",
    });

    setvirtualDisplay({ display: "none" });
    setvirtualStyling({
      backgroundColor: "white",
      color: "#4b5ffa",
    });
  };

  return (
    <>
      <div className="Layout__Constraints">
        {/* Propery Info Container */}
        <div className="Property__Popup__Container">
          {/* Propery Description */}
          <div className="Property__Popup__description">
            <div>
              <FaTimes className="Property__Close__Icon" />
            </div>
            <div className="Property__desc__text">
              <span>Private Room in 4 bedroom house</span>
              <span>Ibeju Leeki</span>
            </div>
          </div>
          {/* Propery Picture */}
          <div className="Property__Popup__Picture__Container">
            <div className="Property__Popup__Pictures">
              <div className="Property__Popup__Pictures__main">
                <img
                  className="Search__Image"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="food"
                />
              </div>
              <div className="Spacing"></div>
              <div className="Property__Popup__Pictures__secondary">
                <img
                  className="Search__Image"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="food"
                />
                <img
                  className="Search__Image"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="food"
                />
                <img
                  className="Search__Image"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="food"
                />
              </div>
            </div>
            {/* Propery Buy Now Button */}
            <div className="Property__Popup__Pictures__Buy__Now">
              {/* price */}
              <div className="Property__popup__price ">
                <span className="price">15,000,000</span>
                <div className="Property__Bed_Bath">
                  <span className="text__color">3 Bedrooms</span>
                  <div className="dot"></div>
                  <span className="text__color">3 Bathrooms</span>
                </div>
              </div>
              {/* Keywords */}
              <div className="Property_Keywords">
                <span>Overview</span>
                <span>Amenities</span>
                <span>Descriptions</span>
                <span>Schedule Tour</span>
              </div>
              {/* Buynow */}
              <div className="Property__Buynow">
                <MdOutlineFavorite className="fav__icon" />
                <FiShare2 />
                <Button
                  text="Pay Now"
                  styles={{
                    padding: "10px 20px",
                    backgroundColor: "#4b5ffa",
                    border: "none",
                    color: "white",
                  }}
                  link=""
                  onclick={""}
                />
              </div>
            </div>
          </div>

          <div className="Property__Popup__Details__Container">
            {/* Overview */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>Overview</h2>
              </div>
              <div className="Property__Details__Description">
                <h2>N400,000</h2>
                <div className="Property__bedroom__bathrooms">
                  <span className="text__color">3 Bedrooms</span>
                  <div className="dot"></div>
                  <span className="text__color">3 Bathrooms</span>
                  <div className="dot"></div>
                  <span className="text__color">3456 Sqr ft</span>
                </div>
                <div className="mt">
                  <span className="text__color">Address:</span>
                  <span className="Property__value">
                    Located at Walton Park Residence, Hakeem Lekki Phase 1,
                    Lagos
                  </span>
                </div>

                <div className="Property__Space_Between  mt ">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Comission Rate:</span>
                    <span className="Property__value"> 10%</span>
                  </div>

                  <div className="Property___spacing_Child">
                    <span className="text__color">RPID:</span>
                    <span className="Property__value"> 5461</span>
                  </div>
                </div>

                <div className="mt">
                  <span className="text__color">Total:</span>
                  <span className="Property__value">
                    N6,225,000.00 (Six Million Two Hundred And Twenty-Five
                    Thousand Naira)
                  </span>
                </div>

                <div className="mt">
                  <span className="text__color">Property:</span>
                  <span className="Property__value">
                    Serviced 3-Bedroom Maisonette + BQ
                  </span>
                </div>

                <div className="Property__Space_Between  mt ">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Terms:</span>
                    <span className="Property__value">
                      One (1) Year Certain
                    </span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Service Charge:</span>
                    <span className="Property__value"> N15,000.00</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt ">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Rent:</span>
                    <span className="Property__value">
                      N50,000.00 (10% Of Rent Paid)
                    </span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Agency Fee:</span>
                    <span className="Property__value">
                      {" "}
                      N5,000.00 (10% Of Rent Paid)
                    </span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt ">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Legal Fee:</span>
                    <span className="Property__value">
                      N2,500.00 (10% Of Rent Paid)
                    </span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Refundable Deposit:</span>
                    <span className="Property__value">
                      {" "}
                      N200, 000.00 (10% Of Rent Paid)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*===================== End of Overview==================================== */}

            {/*===================== Amenities==================================== */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>Amenities</h2>
              </div>
              <div className="Property__Details__Description">
                <div className="Property__Space_Between">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Air Condition</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">CCTV Cameras</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Gues Toilets</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Gas Cooker</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">TV</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Game Room</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Fan</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Swimming Pool Room</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Barbecue</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Curtain</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Barbecue</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Curtain</span>
                  </div>
                </div>

                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Rooms</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="text__color">Grage</span>
                  </div>
                </div>
              </div>
            </div>
            {/*===================== End of Amenities==================================== */}

            {/*===================== Description==================================== */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>Description</h2>
              </div>
              <div className="Property__Details__Description">
                <span className="value">
                  <h3>"Premium Botanical Garden Views"</h3>
                </span>

                <p className="text__color mt">
                  Revelling in glorious surroundings, this immaculate residence
                  is proudly set with view overlooking the magnificient
                  Botanical Gardens and Habour. Stamping itself in the highest
                  echelon of Sydney CBD property, this is an amazing opportunity
                  for any owner occupier, investment or those seeking a
                  pied-a-terre.
                </p>

                <p className="text__color mt">
                  - Well-proportioned open plan entertaining areas
                </p>
                <p className="text__color mt">
                  - Opening to the light of an easterly aspet
                </p>
                <p className="text__color mt">
                  <a href="">
                    <b>Read more</b>
                  </a>{" "}
                </p>

                <span className="Property__value mt">
                  <h4>Build Details</h4>
                </span>
                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Area</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="Property__value">79m&sup2;</span>
                  </div>
                </div>
              </div>
            </div>
            {/*===================== End of Description==================================== */}
            {/*===================== Description==================================== */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>Description</h2>
              </div>
              <div className="Property__Details__Description">
                <span className="value">
                  <h3>"Premium Botanical Garden Views"</h3>
                </span>

                <p className="text__color mt">
                  Revelling in glorious surroundings, this immaculate residence
                  is proudly set with view overlooking the magnificient
                  Botanical Gardens and Habour. Stamping itself in the highest
                  echelon of Sydney CBD property, this is an amazing opportunity
                  for any owner occupier, investment or those seeking a
                  pied-a-terre.
                </p>

                <p className="text__color mt">
                  - Well-proportioned open plan entertaining areas
                </p>
                <p className="text__color mt">
                  - Opening to the light of an easterly aspet
                </p>
                <p className="text__color mt">
                  <a href="">
                    <b>Read more</b>
                  </a>{" "}
                </p>

                <span className="Property__value mt">
                  <h4>Build Details</h4>
                </span>
                <div className="Property__Space_Between  mt">
                  <div className="Property___spacing_Child">
                    <span className="text__color">Area</span>
                  </div>
                  <div className="Property___spacing_Child">
                    <span className="Property__value">79m&sup2;</span>
                  </div>
                </div>
              </div>
            </div>
            {/*===================== End of Description==================================== */}

            {/*===================== Schedul a Tour==================================== */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>Schedul a Tour</h2>
              </div>
              <div className="Property__Details__Description">
                {/* Tab */}
                <div className="Tab">
                  <div className="Tab__Header__Container">
                    <div
                      className="Tab__Header"
                      onClick={physicalHandler}
                      style={physicalStyling}
                    >
                      <h3>Physical Tour</h3>
                    </div>
                    <div
                      className="Tab__Header"
                      onClick={virtualHandler}
                      style={virtualStyling}
                    >
                      <h3>Virtual Tour</h3>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="Tab__Content__Container">
                    {/* Physical Tour Content */}
                    <div className="Tab__Content" style={physicalDisplay}>
                      <div className="Tab__Content__Text">
                        <p className="text__color mt">
                          You will be requiree to pay a sum of N5000 to go on a
                          physical tour for this property
                        </p>
                        <p className="text__color mt">
                          Please only make payment when you are ready to take
                          the virtual tour for a property.{" "}
                        </p>
                      </div>

                      <div className="Tab__Content__Button">
                        <Button
                          text="Pay Now"
                          styles={{
                            padding: "10px 20px",
                            backgroundColor: "#4b5ffa",
                            border: "none",
                            color: "white",
                          }}
                          link=""
                          onclick={""}
                        />
                      </div>
                    </div>

                    {/* Virtual Tour Content */}
                    <div className="Tab__Content" style={virtualDisplay}>
                      <div className="Tab__Content__Text">
                        <p className="text__color mt">
                          You will be requiree to pay a sum of N2000 to go on a
                          virtual tour for this property
                        </p>
                        <p className="text__color mt">
                          Please only make payment when you are ready to take
                          the virtual tour for a property.{" "}
                        </p>
                      </div>
                      <div className="Tab__Content__Button">
                        <Button
                          text="Pay Now"
                          styles={{
                            padding: "10px 20px",
                            backgroundColor: "#4b5ffa",
                            border: "none",
                            color: "white",
                          }}
                          link=""
                          onclick={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===================== End of Schedul a Tour==================================== */}

            {/*===================== View on Map==================================== */}
            <div className="Property__Popup__Details">
              <div className="Property__Details__title">
                <h2>View on Map</h2>
              </div>
              <div className="Property__Details__Description">
                <img src={map} alt="" />
              </div>
            </div>
            {/*===================== End of View on Map==================================== */}
          </div>

          {/* Similar Properties */}
          {/*===================== End of View on Map==================================== */}
          <div className="Poperty__Popup__Similar__Listings">
            <div className="Property__Details__title">
              <h2>Similar</h2>
            </div>
            <div className="Property__Details__title">
              <h2> Properties</h2>
            </div>
            {/* Propery Card 1 */}

            <div className="property-card-container">
              <PropertyCard />
              <div className="spacing"></div>
              <PropertyCard />
              <div className="spacing"></div>
              <PropertyCard />
              <div className="spacing"></div>
              <PropertyCard />
            </div>
          </div>

          {/*===================== End of View on Map==================================== */}
        </div>
      </div>
    </>
  );
};

export default PropertyInfo;
