import React, { useState } from "react";
import Text from "../../components/ui/Text";
import PropertyDataTable from "./PropertyDataTable";
import { leaseData } from "../../data/property-data/leaseData";
import { sellData } from "../../data/property-data/sellData";

import "../../styles/pages/property-data.scss";

const PropertyData = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="property-data-contianer">
      <div className="property-nav-control"></div>
      <div className="property-data-wrapper">
        <Text value="Property Data" />
        <div className="toggle-tab-wrapper">
          <p
            className={`item1 ${tab ? "addBorder" : ""} `}
            onClick={() => {
              setTab(1);
            }}
          >
            Sell
          </p>
          <p
            className={`item2 ${tab ? "" : "addBorder"} `}
            onClick={() => {
              setTab(0);
            }}
          >
            Lease
          </p>
        </div>
        <div>
          {tab ? (
            <PropertyDataTable
              data={sellData}
              c1t="Details"
              c2t="Property ID"
              c3t="Property Type"
              c4t="Status"
              c5t="Price"
            />
          ) : (
            <PropertyDataTable
              data={leaseData}
              c1t="Details"
              c2t="Property ID"
              c3t="Tenant ID"
              c4t="Start Date"
              c5t="End Date"
              remove={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyData;
