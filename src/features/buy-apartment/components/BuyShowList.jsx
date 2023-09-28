import React, { useState } from "react";
import BuyCard from "./BuyCard";
import "../style/buy.scss";
import DisplayResults from "./DisplayResults";
import SortProperty from "./SortProperty";
import Mapty from "../../../components/ui/Mapty";

const BuyShowList = () => {
  const [design, setDesign] = useState(false);
  return (
    <div>
      {/* SORT PROPERTY  */}
      <SortProperty color={design} onclick={() => setDesign((prev) => !prev)} />

      {/* PROPERTY CARD */}
      <div className="buy__Card__Container__List">
        <div className="buy__Card__Container_Box">
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <BuyCard status={design} />
          <DisplayResults />
        </div>
        <div className="buy__Card__Container_Map">
          <Mapty />
        </div>
      </div>
    </div>
  );
};

export default BuyShowList;
