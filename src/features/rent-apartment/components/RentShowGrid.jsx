import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import Mapty from "../../../components/ui/Mapty";

import RentCard from "./RentCard";

const RentShowGrid = () => {
  const [design, setDesign] = useState(false);
  return (
    <div>
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
            <h4 onClick={() => setDesign((prev) => !prev)}>
              <FiBarChart color={design ? "17294d" : "#ccc"} />
            </h4>
            <h4 onClick={() => setDesign((prev) => !prev)}>
              <FaBars color={!design ? "17294d" : "#ccc"} />
            </h4>
          </div>
        </div>
      </div>

      <div className="Rent__Card__Container__Grid">
        <div
          className={
            !design
              ? "Rent__Card__Container_Box"
              : "Rent__Card__Container_Box_column"
          }
        >
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
          <RentCard status={design} />
        </div>
        <div className="Rent__Card__Container_map">
          <Mapty />
        </div>
      </div>
    </div>
  );
};

export default RentShowGrid;
