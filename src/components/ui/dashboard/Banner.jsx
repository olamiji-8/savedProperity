import React from "react";
import "../../../styles/ui/dashboard/banner.scss";

import pos from "../../../assets/images/pos.png";

function Banner() {
  return (
    <div className="banner">
      <div>
        <span> Hi, Dayo</span>
        <span>Welcome to your dashboard</span>
        <span>See all property informaition and access transactions</span>
      </div>
      <div>
        <img src={pos} alt="" srcSet="" />
      </div>
    </div>
  );
}

export default Banner;
