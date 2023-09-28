import { Link } from "react-router-dom";

import tempImage from "../../../assets/images/picture2.png";
const PriceCategory = ({ category, image, duration, desc, price }) => {
  return (
    <div className="Price-Card">
      <div>
        <h3>{category || "standard"}</h3>
        <img src={image || tempImage} />
      </div>
      <p className="Duration">{duration || 1} month</p>
      <p className="Desc">
        {desc ||
          "You register and pay mothly so as to advertise your services on Renager"}
      </p>
      <h3 className="Price">N {price || 1500}</h3>

      <Link to="#">Get Started</Link>
    </div>
  );
};

export default PriceCategory;
