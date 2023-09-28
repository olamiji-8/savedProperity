import React from "react";

import { GrSearch } from "react-icons/gr";
import { AiOutlineHome, AiOutlineDown } from "react-icons/ai";
import RentShowGrid from "./RentShowGrid";
import ProperyNavigation from "./ProperyNavigation";

const RentNavigationComponents = () => {
  return (
    <div>
      <div className="Layout__Constraints">
        <ProperyNavigation />
        <RentShowGrid />
      </div>
    </div>
  );
};

export default RentNavigationComponents;
