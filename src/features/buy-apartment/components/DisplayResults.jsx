import React from "react";
import "../style/displayresults.scss";

const DisplayResults = () => {
  const Counters = [1, 2, 3, 4, 5, 7];

  return (
    <div className="Display_Results__Container">
      <div className="Display_Results__title">
        <h2> Displaying Results 1-24 of 200</h2>
      </div>
      <div className="Display_Results__Counter">
        {Counters.map((count) => (
          <span className="counter" key={count}>
            {count}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DisplayResults;
