import React from "react";
import { FaBars } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import "../style/sortproperty.scss";

const SortProperty = ({ color, onclick }) => {
  return (
    <div className="sorting__container">
      <h5 className="sortByClassified">
        Sort by
        <select name="sort" id="sort">
          <option defaultValue="Price">Price</option>
          <option value="Type">Type</option>
          <option value="Location">Location</option>
        </select>
      </h5>
      <div className="sort__layout">
        <div className="sort__layout__item">
          <h4 onClick={onclick}>
            <FiBarChart color={color ? "17294d" : "#ccc"} />
          </h4>
          <h4 onClick={onclick}>
            <FaBars color={!color ? "17294d" : "#ccc"} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SortProperty;
