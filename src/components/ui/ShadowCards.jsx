import React from "react";

const ShadowCard = ({ children }) => {
  return (
    <>
      <div className="shadow-card-component">
        {children.remark}
        {children.author}
      </div>
    </>
  );
};

export default ShadowCard;
