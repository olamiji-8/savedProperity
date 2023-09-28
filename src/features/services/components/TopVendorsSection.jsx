import VendorsList from "./VendorsList";

import { Link } from "react-router-dom";
const TopVendorsSection = () => {
  return (
    <section className="TopVendors-Section">
      <div className="Section-Header">
        <h2 className="Section-Tag">Top Service Providers</h2>
        <Link to={"#"}>see all</Link>
      </div>
      <VendorsList />
    </section>
  );
};

export default TopVendorsSection;
