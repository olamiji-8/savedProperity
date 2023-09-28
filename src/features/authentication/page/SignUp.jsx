import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { UilFacebookF, UilGoogle } from "@iconscout/react-unicons";
import SignUpForm from "../components/SignUpForm";

const Login = () => {
  return (
    <>
      <div className="account">
        <div className="form-card">
          <div className="head">
            <p>Let's get started shall we?</p>
          </div>
          <p className="span">
            Your Journey to owning an amazing property starts now. Already have
            an account?
            <Link to="/login">Log in</Link>
          </p>
          <SignUpForm />

          <p className="or">or</p>
          <Button
            icon={<UilFacebookF color="#ffffff" />}
            link="/"
            text="Continue with Facebook"
            styles={{ width: "94%" }}
          ></Button>
          <Button
            link="/"
            text={"Continue with Google"}
            icon={<UilGoogle color="#ffffff" />}
            styles={{ backgroundColor: "#df0000", width: "94%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
