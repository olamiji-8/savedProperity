import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../../../styles/ui/dashboard/dashboardproperty.scss";
import PropertyCard from "./PropertyCard";

function DashboardProperty() {
  return (
    <div className="property-container ">
      <div className="property-content__title ">
        <span>Saved Propersties</span>
        <span>
          <a href="/total">
            View Total &nbsp;
            <IoIosArrowForward />
          </a>
        </span>
      </div>
      <div className="property-content-display ">
        <PropertyCard />
        <div className="spacing"></div>
        <PropertyCard />
        <div className="spacing"></div>
        <PropertyCard />
      </div>
    </div>
  );
}

export default DashboardProperty;
