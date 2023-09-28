import ServicesList from "./ServicesList";
import { Link } from "react-router-dom";

const FeaturedServicesSection = () => {
  return (
    <section className="FeaturedServices-Section">
      <div className="Section-Header">
        <h2 className="Section-Tag">Featured Sercvices</h2>
        <Link to={"#"}>see all</Link>
      </div>
      <ServicesList />
    </section>
  );
};

export default FeaturedServicesSection;
