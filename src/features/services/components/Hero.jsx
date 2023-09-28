import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const buttonStyle = {
    padding: "12px 36px",
    fontSize: "16px",
    textTransform: "capitalize",
  };
  return (
    <section className="Service-Hero Sec-Bg">
      <div className="Container">
        <h1 className="Desktop-Only">
          Foremost Real Estate Maintanace Provider Application
        </h1>
        <h1 className="Mobile-Only">Real Estate Maintenace</h1>
        <p>
          We deliver the first of its kind medium of communication between
          maintance workers and those in need of their services
        </p>
        <div className="Desktop-Only">
          <Button
            link={"/services"}
            styles={buttonStyle}
            text={"view services"}
          />
        </div>
        <div className="Mobile-Only">
          <p>
            <Link to={"/services"}>View Available Servces</Link>
          </p>
          <p>
            <Link className="Ul" to={"/"}>
              Register as a Service Provider
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
