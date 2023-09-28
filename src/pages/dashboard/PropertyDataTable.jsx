import React from "react";
import "../../styles/pages/propertyDataTable.scss";
import { Link } from "react-router-dom";
const PropertyDataTable = ({ data, c1t, c2t, c3t, c4t, c5t, remove }) => {
  return (
    <div className="property-data">
      <div className="property-data-head">
        <div className="span-property-data-head-2">{c1t}</div>
        <div>{c2t}</div>
        <div>{c3t}</div>
        <div>{c4t}</div>
        <div className="span-property-data-head-2">{c5t}</div>
      </div>
      <div className="property-data-table-wrapper">
        {data.map((value) => {
          return (
            <div className="property-data-content" key={value.id}>
              <div className="span-property-data-content">
                <div className="property-data-status">
                  {value.detail.status}
                </div>
              </div>
              <div className="property-data-list">{value.lastPoistion}</div>
              <div className="property-data-list">{value.PropertyType}</div>
              <div className="property-data-list">{value.TransactionType}</div>
              <div className="property-data-list">{value.Price}</div>
              <Link
                to={`/property-data/${value.id}`}
                className="property-data-list color1"
              >
                View
              </Link>
              {remove ? (
                ""
              ) : (
                <div className="property-data-list color2">Remove Property</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyDataTable;

// -----------------------------------function for random value generation----------------
