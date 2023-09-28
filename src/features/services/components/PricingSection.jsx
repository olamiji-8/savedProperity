import PriceCategory from "./PriceCategory";
const PricingSection = () => {
  return (
    <section className="Sec-Bg Pricing-Section">
      <div className="Pr">
        <h1 className="PT">Pricing</h1>
        <p className="PT">
          By joining to be a service provider on Renager, your first month are
          on us
        </p>
      </div>
      <div className="PriceCard-List">
        <PriceCategory category={"Trial"} price={"Free"} />
        <PriceCategory category={"Basic"} price={500} />
        <PriceCategory category={"Premium"} price={1400} />
        <PriceCategory category={"Ultimate"} price={2500} />
      </div>
    </section>
  );
};

export default PricingSection;
