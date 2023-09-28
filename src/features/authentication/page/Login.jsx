import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { UilFacebookF, UilGoogle } from "@iconscout/react-unicons";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="account">
        <div className="form-card">
          <div className="head">
            <p>Welcome Back</p>
          </div>
          <p className="span">
            Let's pick up where we left off yeah?. Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
          <LoginForm />
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
