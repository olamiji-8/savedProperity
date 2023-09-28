import Hero from "../components/Hero";
import FeaturedServicesSection from "../components/FeaturedServicesSection";
import PricingSection from "../components/PricingSection";
import TopVendorsSection from "../components/TopVendorsSection";
import Layout from "../Layout";

const ServiceIndexPage = () => {
  return (
    <Layout secBg={true}>
      <Hero />
      <FeaturedServicesSection />
      <PricingSection />
      <TopVendorsSection />
    </Layout>
  );
};

export default ServiceIndexPage;
