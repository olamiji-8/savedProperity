import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, styles, icon, onclick }) => {
  return (
    <>
      <Link to={link}>
        <button className="btn" style={styles} onClick={onclick}>
          {icon ? icon : ""}
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
