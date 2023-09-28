import React from "react";
import { Link } from "react-router-dom";
import Button from "./components/ui/Button";

const ErrorPage = () => {
  return (
    <>
      <div className="Error__Contain">
        <div className="Error__Container">
          <h1 className="Error__Container--Title">
            Sorry, Renager is unable to load
          </h1>
          <p className="Error__Container--Description">
            <span>Our lorem ipsum pisum. Please try again soon.</span>
          </p>
          <Button link="/" text="Reload" />
          <p className="error__help">
            If the problem persists please contact us on
            <br />
            <span>help@renager.com</span>
            <br />
            Alternatively you can{" "}
            <span style={{ textDecoration: "underline" }}>
              <Link to={"/"}>go to the home page.</Link>
            </span>
            <br />
            <span className="error-code">408: Socket timeout</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
